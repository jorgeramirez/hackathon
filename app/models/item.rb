class Item < ActiveRecord::Base

  scope :by_item, -> descripcion { where("producto_descripcion ilike ? and esconvocante=false", "%#{descripcion}%") }
  scope :by_convocante, -> descripcion { where("producto_descripcion ilike ? and esconvocante=true", "%#{descripcion}%") }
end
