class RolesUsuario < ActiveRecord::Base
  belongs_to :rol
  belongs_to :usuario 
  scope :by_usuario, -> usuario { where("usuario_id = ?", "#{usuario}") }
end
