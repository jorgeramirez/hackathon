class CreateSucursalesUsuarios < ActiveRecord::Migration
  def change
    create_table :sucursales_usuarios do |t|
      t.references :usuario, index: true
      t.references :sucursal, index: true
    end
  end
end
