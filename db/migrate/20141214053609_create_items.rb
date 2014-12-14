class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :producto_codigo
      t.string :producto_descripcion
      t.string :precio_minimo
      t.string :precio_maximo
      t.string :precio_promedio

      t.timestamps
    end
  end
end
