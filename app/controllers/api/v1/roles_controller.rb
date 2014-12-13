class API::V1::RolesController < ApplicationController
  respond_to :json
  has_scope :by_codigo
  has_scope :by_descripcion
  has_scope :by_username
  PER_PAGE_RECORDS = 5

  def index
    @roles = apply_scopes(Rol).page(params[:page]).per(PER_PAGE_RECORDS)
    render json: @roles, meta: {total: apply_scopes(Rol).all.count, total_pages: @roles.num_pages}      
  end
    
end
