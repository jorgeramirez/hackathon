class CreateTipoOperaciones < ActiveRecord::Migration
  def change
    create_table :tipo_operaciones do |t|
      t.string :codigo
      t.string :descripcion

      t.timestamps
    end
  end
end
