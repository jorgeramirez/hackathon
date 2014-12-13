class AddSucursalToAPIKeys < ActiveRecord::Migration
  def change
    add_reference :api_keys, :sucursal, index: true
  end
end
