class CreateInvitados < ActiveRecord::Migration
  def change
    create_table :invitados do |t|
      t.references :convocatoria, index: true
      t.string :razon_social
      t.string :ruc
      t.string :telefono
      t.string :email

      t.timestamps
    end
  end
end
