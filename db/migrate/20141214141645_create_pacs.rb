class CreatePacs < ActiveRecord::Migration
  def change
    create_table :pacs do |t|
      t.string :id_pac
      t.references :categoria, index: true
      t.string :id_llamado
      t.string :anio
      t.references :tipo_operacion, index: true
      t.string :moneda
      t.string :nombre_licitacion
      t.string :convicante
      t.string :fecha_estimada
      t.string :fecha_publicacion
      t.string :estado_actual

      t.timestamps
    end
  end
end
