class ConvocatoriaLoteSerializer < ActiveModel::Serializer
  attributes :id, :id, :nro, :nombre_lote
  has_one :convocatoria
end
