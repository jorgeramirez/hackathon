class API::V1::UsuariosController < ApplicationController
  respond_to :json
  #before_filter :ensure_authenticated_user
  #before_filter :only => [:index]   do |c| c.isAuthorized "BE_index_usuarios" end
  #before_filter :only => [:show]    do |c| c.isAuthorized "BE_show_usuarios" end
  #before_filter :only => [:create]  do |c| c.isAuthorized "BE_post_usuarios" end
  #before_filter :only => [:update]  do |c| c.isAuthorized "BE_put_usuarios" end
  #before_filter :only => [:destroy] do |c| c.isAuthorized "BE_delete_usuarios" end 

  has_scope :username

  has_scope :by_username
  has_scope :by_nombre
  has_scope :by_apellido
  has_scope :by_email
  has_scope :by_all_attributes
    
  PER_PAGE_RECORDS = 15


  def index
    @usuarios = apply_scopes(Usuario).page(params[:page]).per(PER_PAGE_RECORDS)
    render json: @usuarios, each_serializer: UsuarioSerializer, meta: {total: apply_scopes(Usuario).all.count, total_pages: @usuarios.num_pages}

    #respond_with :usuario => @usuarios, :total_pages => @usuarios.num_pages, :total => Usuario.count
      
  end

  def show
    respond_with Usuario.find(params[:id])
  end

  def new
  	respond_with Usuario.new
  end

  def create
		Usuario.transaction do
  		@usuario = Usuario.new(usuario_inner_params)
  		@usuario.save
			updateRelations @usuario
		end
  	respond_with @usuario
  end

  def update
    @usuario = Usuario.find_by(id: params[:id])
      
    if @usuario.nil?
      render json: {message: 'Resource not found'}, :status => :not_found
    else
    	Usuario.transaction do
				updateRelations @usuario
			end
      respond_with @usuario
  	end
  end
    
  def updateRelations usuario
      roles = []
      if(not params[:usuario][:roles].nil?)
  		params[:usuario][:roles].each do |rol|
          rolObject = Rol.find(rol[:id])
          roles.push(rolObject)
        end
      end
			usuario.roles = roles
      usuario.update_attributes(roles: roles, sucursales: sucursales)
		  usuario.update_attributes(usuario_inner_params)
  end

  def destroy
    @usuario = Usuario.find_by(id: params[:id])
    if @usuario.nil?
      render json: {message: 'Resource not found'}, :status => :not_found
    else
  		@usuario.destroy
  		respond_with @usuario
  	end
  end

  def usuario_params
  	params.require(:usuario).permit(:nombre, :apellido, :email, :username, :password_digest, :password, :password_confirmation, sucursales: [:id, :codigo, :descripcion], roles: [:id, :codigo, :descripcion])
  end

  def usuario_inner_params
  	params.require(:usuario).permit(:nombre, :apellido, :email, :username, :password_digest, :password, :password_confirmation)
  end
end