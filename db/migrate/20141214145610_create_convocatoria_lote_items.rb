class CreateConvocatoriaLoteItems < ActiveRecord::Migration
  def change
    create_table :convocatoria_lote_items do |t|
      t.references :convocatoria_lote, index: true
      t.string :unidad_medida
      t.string :numero
      t.string :producto_codigo
      t.string :producto_descripcion
      t.references :item, index: true
      t.string :descripcion
      t.integer :cantidad

      t.timestamps
    end
  end
end
