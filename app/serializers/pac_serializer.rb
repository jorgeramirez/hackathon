class PacSerializer < ActiveModel::Serializer
  attributes :id, :id_pac, :id_llamado, :anio, :moneda, :nombre_licitacion, :convicante, :fecha_estimada, :fecha_publicacion, :estado_actual
  has_one :categoria
  has_one :tipo_operacion
end
