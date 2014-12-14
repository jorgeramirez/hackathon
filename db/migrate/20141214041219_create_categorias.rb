class CreateCategorias < ActiveRecord::Migration
  def change
    create_table :categorias do |t|
      t.string :codigo
      t.string :descripcion

      t.timestamps
    end
  end
end
