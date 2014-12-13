class ClienteSerializer < ActiveModel::Serializer
  attributes :id, :numero_cliente
  has_one :persona,embed: :id, include: false
end
