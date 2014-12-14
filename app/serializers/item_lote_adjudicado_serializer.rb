class ItemLoteAdjudicadoSerializer < ActiveModel::Serializer
  attributes :id, :id_contrato, :id_lote, :producto_codigo, :producto_descripcion, :descripcion, :cantidad, :precio_unitario
  has_one :adjudicacion_lote
  has_one :item
end
