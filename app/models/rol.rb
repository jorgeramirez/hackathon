class Rol < ActiveRecord::Base
  has_and_belongs_to_many :recursos
  has_and_belongs_to_many :usuarios

  scope :by_codigo, -> codigo { where("codigo like ?", "%#{codigo}%") }
  scope :by_descripcion, -> descripcion { where("descripcion ilike ?", "%#{descripcion}%") }
  scope :by_all_attributes, -> value { 
    where("codigo ilike ? OR id ilike ? OR descripcion like ?", "%#{value}%", "%#{value}%", "%#{value}%")
  }
end