class API::V1::ConvocatoriasController < ApplicationController
  respond_to :json
  #before_filter :ensure_authenticated_user
  #before_filter :only => [:index]   do |c| c.isAuthorized "BE_index_convocatorias" end
  #before_filter :only => [:show]    do |c| c.isAuthorized "BE_show_convocatorias" end
  #before_filter :only => [:create]  do |c| c.isAuthorized "BE_post_convocatorias" end
  #before_filter :only => [:update]  do |c| c.isAuthorized "BE_put_convocatorias" end
  #before_filter :only => [:destroy] do |c| c.isAuthorized "BE_delete_convocatorias" end 

  #has_scope :username
  #has_scope :by_username
  #has_scope :by_nombre
  #has_scope :by_apellido
  #has_scope :by_email
  #has_scope :by_all_attributes
    
  PER_PAGE_RECORDS = 15


  def index
    @convocatorias = apply_scopes(Convocatoria).page(params[:page]).per(PER_PAGE_RECORDS)
    render json: @convocatorias, each_serializer: ConvocatoriaSerializer, meta: {total: apply_scopes(Convocatoria).all.count, total_pages: @convocatorias.num_pages}
  end

  def show
    respond_with Convocatoria.find(params[:id])
  end

  def new
  	respond_with Convocatoria.new
  end

  def create
		Convocatoria.transaction do
  		@convocatoria = Convocatoria.new(convocatoria_inner_params)
  		@convocatoria.save
		end
  	respond_with @convocatoria
  end

  def update
    @convocatoria = Convocatoria.find_by(id: params[:id])
      
    if @convocatoria.nil?
      render json: {message: 'Resource not found'}, :status => :not_found
    else
    	Convocatoria.transaction do
			end
      respond_with @convocatoria
  	end
  end
    
  def destroy
    @convocatoria = Convocatoria.find_by(id: params[:id])
    if @convocatoria.nil?
      render json: {message: 'Resource not found'}, :status => :not_found
    else
  		@convocatoria.destroy
  		respond_with @convocatoria
  	end
  end

  def convocatoria_params
  	params.require(:convocatoria).permit(:codigo, :nombre_licitacion, :convocante, :tipo_contratacion, :sistema_adjudicacion, :forma_pago, :apertura_competencia, :estado)
  end

  def convocatoria_inner_params
  	params.require(:convocatoria).permit(:codigo, :nombre_licitacion, :convocante, :tipo_contratacion, :sistema_adjudicacion, :forma_pago, :apertura_competencia, :estado)
  end
end