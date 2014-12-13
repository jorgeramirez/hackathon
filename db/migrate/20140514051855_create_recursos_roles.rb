class CreateRecursosRoles < ActiveRecord::Migration
  def change
    create_table :recursos_roles do |t|
      t.references :rol, index: true
      t.references :recurso, index: true

      t.timestamps
    end
  end
end
