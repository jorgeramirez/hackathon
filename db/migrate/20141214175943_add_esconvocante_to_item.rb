class AddEsconvocanteToItem < ActiveRecord::Migration
  def change
    add_column :items, :esconvocante, :boolean
  end
end
