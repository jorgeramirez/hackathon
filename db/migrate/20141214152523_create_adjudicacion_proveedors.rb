class CreateAdjudicacionProveedors < ActiveRecord::Migration
  def change
    create_table :adjudicacion_proveedors do |t|
      t.references :adjudicaciones, index: true
      t.integer :monto_adjudicado
      t.string :moneda
      t.string :id_contrato
      t.string :codigo_contratacion
      t.string :razon_social
      t.string :ruc

      t.timestamps
    end
  end
end
