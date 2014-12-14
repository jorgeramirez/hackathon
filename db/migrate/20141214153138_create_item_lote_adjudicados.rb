class CreateItemLoteAdjudicados < ActiveRecord::Migration
  def change
    create_table :item_lote_adjudicados do |t|
      t.references :adjudicacion_lote, index: true
      t.string :id_contrato
      t.string :id_lote
      t.string :producto_codigo
      t.string :producto_descripcion
      t.string :descripcion
      t.integer :cantidad
      t.integer :precio_unitario
      t.references :item, index: true

      t.timestamps
    end
  end
end
