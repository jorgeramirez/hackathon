class CreateRolesUsuarios < ActiveRecord::Migration
  def change
    create_table :roles_usuarios do |t|
      t.references :rol, index: true
      t.references :usuario, index: true

      t.timestamps
    end
  end
end
