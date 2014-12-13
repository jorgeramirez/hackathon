class SolicitudSerializer < ActiveModel::Serializer
  attributes :id, :fecha_solicitud, :monto_solicitado, :tasa_solicitada, :plazo_solicitado, :fecha_aprobacion, :monto_aprobado, :tasa_aprobada, :plazo_aprobado, :observaciones, :vigencia_aprobacion, :estado
  has_one :usuario_solicitud, embed: :id, include: false
  has_one :cliente, embed: :id, include: false
  has_one :usuario_aprobacion, embed: :id, include: false
end
