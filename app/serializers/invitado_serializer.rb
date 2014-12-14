class InvitadoSerializer < ActiveModel::Serializer
  attributes :id, :razon_social, :ruc, :telefono, :email
  has_one :convocatoria
end
