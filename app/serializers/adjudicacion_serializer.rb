class AdjudicacionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :pac
  has_one :convocatoria
  has_one :categoria
  has_one :tipo_operacion
end
