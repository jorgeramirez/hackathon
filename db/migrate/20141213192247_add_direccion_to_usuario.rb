class AddDireccionToUsuario < ActiveRecord::Migration
  def change
    add_column :usuarios, :direccion, :string
  end
end
