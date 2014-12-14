class ConvocatoriaSerializer < ActiveModel::Serializer
  attributes :id, :estado, :tipo_garantia_oferta, :sistema_adjudicacion, :forma_pago, :moneda, :id, :planificacion_id, :id_llamado, :nombre_licitacion, :convocante, :metodo_seleccion, :fecha_publicacion, :fuente_financiamiento, :plazo_entrega_adquisición, :lugar_entrega_adquisicion, :vigencia_contrato, :nombre_contacto, :cargo_contacto, :telefono_contacto, :email_contacto, :fecha_junta_aclaracion, :lugar_junta_aclaracion, :lugar_consulta, :fecha_tope_consulta, :fecha_tope_respuesta, :lugar_entrega_oferta, :fecha_entrega_oferta, :lugar_apertura_oferta, :fecha_apertura_oferta, :fecha_inicio_propuesta, :fecha_cierre_propuesta, :fecha_etapa_competitiva, :observaciones, :restricciones
  has_one :categoria
  has_one :tipo_operacion
end
