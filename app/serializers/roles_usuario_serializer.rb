class RolesUsuarioSerializer < ActiveModel::Serializer
  attributes :id
  has_one :rol,embed: :id, include: false
  has_one :usuario,embed: :id, include: false
end
