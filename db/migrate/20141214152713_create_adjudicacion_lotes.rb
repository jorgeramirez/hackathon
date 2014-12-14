class CreateAdjudicacionLotes < ActiveRecord::Migration
  def change
    create_table :adjudicacion_lotes do |t|
      t.references :adjudicaciones, index: true
      t.string :id_contrato
      t.string :id_lote
      t.string :numero_lote
      t.string :nombre_lote

      t.timestamps
    end
  end
end
