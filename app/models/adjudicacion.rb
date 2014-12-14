class Adjudicacion < ActiveRecord::Base
  belongs_to :pac
  belongs_to :convocatoria
  belongs_to :categoria
  belongs_to :tipo_operacion
end
