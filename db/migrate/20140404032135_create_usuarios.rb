class CreateUsuarios < ActiveRecord::Migration
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :apellido
      t.string :email
      t.string :username
      t.string :password_digest

      t.timestamps
    end
    add_index :usuarios, :email, unique: true
    add_index :usuarios, :username, unique: true
  end
end
