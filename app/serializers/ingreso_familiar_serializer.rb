class IngresoFamiliarSerializer < ActiveModel::Serializer
  attributes :id, :ingreso_mensual
  has_one :vinculo_familiar
end
