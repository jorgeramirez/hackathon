class Pac < ActiveRecord::Base
  belongs_to :categoria
  belongs_to :tipo_operacion
end
