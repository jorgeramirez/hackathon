class SucursalUsuarioSerializer < ActiveModel::Serializer
  attributes :id
  has_one :sucursal,embed: :id, include: false
  has_one :usuario,embed: :id, include: false
end