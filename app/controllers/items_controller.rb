class API::V1::ItemsController < ApplicationController
  respond_to :json
 
  has_scope :by_item
  has_scope :by_convocante

  PER_PAGE_RECORDS = 15


  def index
   @items = apply_scopes(Item).page(params[:page]).per(PER_PAGE_RECORDS)
   
   render json: @items, meta: {total: apply_scopes(Item).all.count, total_pages: @items.num_pages}
  end

  def show
    respond_with Item.find(params[:id])
  end

  def new
    respond_with Item.new
  end

  def create
    Item.transaction do
      @item = Item.new(item_inner_params)
      @item.save
      updateRelations @item
    end
    respond_with @item
  end

  def update
    @item = Item.find_by(id: params[:id])
      
    if @item.nil?
      render json: {message: 'Resource not found'}, :status => :not_found
    else
      Item.transaction do
        updateRelations @item
      end
      respond_with @item
    end
  end
    
  
  def destroy
    @item = Item.find_by(id: params[:id])
    if @item.nil?
      render json: {message: 'Resource not found'}, :status => :not_found
    else
      @item.destroy
      respond_with @item
    end
  end

  def item_inner_params
    params.require(:item).permit(:id, :producto_codigo, :producto_descripcion, :precio_minimo, :precio_maximo, :precio_promedio)
  end

end
