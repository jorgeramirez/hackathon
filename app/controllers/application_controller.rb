class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  
  before_action :set_locale

  after_filter :set_access_control_headers

  def handle_options_request
    head(:ok) if request.request_method == "OPTIONS"
  end

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
  end 

  protected

  def is_report_request
    tipo = params[:content_type]
    if tipo.eql? "pdf"
      puts "*************** ES UN REQUEST DE REPORTE *********************"
    else
      puts "-------------- ES UN REQUEST NORMAL ------------------------"
    end
    return tipo.eql? "pdf" 
  end
  # Renders a 401 status code if the current user is not authorized
  def ensure_authenticated_user
    puts "#{!is_report_request}"
    if !is_report_request
      head :unauthorized unless current_user
    end
    #head :unauthorized unless current_user
  end

  # Returns the active user associated with the access token if available
  def current_user
    api_key = APIKey.active.where(access_token: token).first
    if api_key
      return api_key.usuario
    else
        return nil
    end
  end


  def current_sucursal
    api_key = APIKey.active.where(access_token: token).first
    if api_key
      return api_key.sucursal
    else
        return nil
    end
  end

  # Parses the access token from the header
  def token
    bearer = request.headers["HTTP_AUTHORIZATION"]

    # allows our tests to pass
    bearer ||= request.headers["rack.session"].try(:[], 'Authorization')

    if bearer.present?
      bearer.split.last
    else
      nil
    end
  end

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def isAuthorized (permiso)
    puts "#{!is_report_request}"
    if !is_report_request
      head :unauthorized unless (current_user != nil && Usuario.where("id = ? ",current_user).first.isAuthorized(permiso))
    end
  end

  def forbidden (msg)
    respond_to do |format|
      format.html { render :file => "#{Rails.root}/public/403", :layout => false, :status => :forbidden }
      format.xml  { head :forbidden }
      format.any  { render :json => { :message => msg } }
    end
  end
end
