class CreateConvocatoria < ActiveRecord::Migration
  def change
    create_table :convocatoria do |t|
      t.string :estado
      t.references :categoria, index: true
      t.references :tipo_operacion, index: true
      t.string :tipo_garantia_oferta
      t.string :sistema_adjudicacion
      t.string :forma_pago
      t.string :moneda
      #t.string :id
      t.string :planificacion_id
      t.string :id_llamado
      t.string :nombre_licitacion
      t.string :convocante
      t.string :metodo_seleccion
      t.string :fecha_publicacion
      t.string :fuente_financiamiento
      t.string :plazo_entrega_adquisición
      t.string :lugar_entrega_adquisicion
      t.string :vigencia_contrato
      t.string :nombre_contacto
      t.string :cargo_contacto
      t.string :telefono_contacto
      t.string :email_contacto
      t.string :fecha_junta_aclaracion
      t.string :lugar_junta_aclaracion
      t.string :lugar_consulta
      t.string :fecha_tope_consulta
      t.string :fecha_tope_respuesta
      t.string :lugar_entrega_oferta
      t.string :fecha_entrega_oferta
      t.string :lugar_apertura_oferta
      t.string :fecha_apertura_oferta
      t.string :fecha_inicio_propuesta
      t.string :fecha_cierre_propuesta
      t.string :fecha_etapa_competitiva
      t.string :observaciones
      t.string :restricciones

      t.timestamps
    end
  end
end
