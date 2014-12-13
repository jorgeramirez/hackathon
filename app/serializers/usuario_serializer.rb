class UsuarioSerializer < ActiveModel::Serializer
  attributes :id, :nombre, :apellido, :email, :username
  has_many :roles, embed: :id,  include: false, autosave: true
end
