class ItemLoteAdjudicado < ActiveRecord::Base
  belongs_to :adjudicacion_lote
  belongs_to :item
end
