class ConvocatoriaLoteItem < ActiveRecord::Base
  belongs_to :convocatoria_lote
  belongs_to :item
end
