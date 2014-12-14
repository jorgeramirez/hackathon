class ConvocatoriaLoteItemSerializer < ActiveModel::Serializer
  attributes :id, :unidad_medida, :numero, :producto_codigo, :producto_descripcion, :descripcion, :cantidad
  has_one :convocatoria_lote
  has_one :item
end
