class CreateConvocatoriaLotes < ActiveRecord::Migration
  def change
    create_table :convocatoria_lotes do |t|
      t.references :convocatoria, index: true
      t.string :nro
      t.string :nombre_lote

      t.timestamps
    end
  end
end
