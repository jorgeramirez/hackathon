class API::V1::RolesUsuariosController < ApplicationController
  respond_to :json
    
  has_scope :by_usuario
  PER_PAGE_RECORDS = 5
    
  def index
    @roles_usuarios = apply_scopes(RolesUsuario).page(params[:page]).per(PER_PAGE_RECORDS)
    render json: @roles_usuarios, each_serializer: RolesUsuarioSerializer, meta: {total: apply_scopes(RolesUsuario).all.count, total_pages: @roles_usuarios.num_pages}
  end

  def show
    respond_with RolesUsuario.find(params[:id])
  end

  def new
    respond_with RolesUsuario.new
  end

  def create
    @roles_usuario = RolesUsuario.new(roles_usuarios_params)
    @roles_usuario.save
    respond_with @roles_usuario, location: nil
  end

  def update
    @roles_usuario = RolesUsuario.find_by(id: params[:id])
    if @roles_usuario.nil?
      render json: {message: 'Resource not found'}, :status => :not_found
    else
      @roles_usuario.update_attributes(producto_params)
      respond_with @roles_usuario, location: nil
    end
  end

  def destroy
    @roles_usuario = RolesUsuario.find_by(id: params[:id])
    if @roles_usuario.nil?
      render json: {message: 'Resource not found'}, :status => :not_found
    else
      @roles_usuario.destroy
      respond_with @roles_usuario
    end
  end

  def roles_usuarios_params
    params.require(:roles_usuario).permit(:id, :rol_id, :usuario_id)
  end
end
