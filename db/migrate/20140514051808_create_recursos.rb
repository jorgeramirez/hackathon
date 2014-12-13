class CreateRecursos < ActiveRecord::Migration
  def change
    create_table :recursos do |t|
      t.string :codigo
      t.string :descripcion

      t.timestamps
    end
  end
end
