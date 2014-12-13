class RecursosRolSerializer < ActiveModel::Serializer
  attributes :id
  has_one :rol
  has_one :recurso
end
