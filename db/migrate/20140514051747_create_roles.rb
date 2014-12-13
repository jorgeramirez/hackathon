class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
      t.string :codigo
      t.string :descripcion

      t.timestamps
    end
  end
end
