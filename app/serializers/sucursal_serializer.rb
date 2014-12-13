class SucursalSerializer < ActiveModel::Serializer
  attributes :id, :codigo, :descripcion, :color
  has_one :empresa, embed: :id, include: false
end