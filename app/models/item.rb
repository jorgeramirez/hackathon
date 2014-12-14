class Item < ActiveRecord::Base

  scope :by_descripcion, -> descripcion { where("producto_descripcion ilike ?", "%#{descripcion}%") }
end
