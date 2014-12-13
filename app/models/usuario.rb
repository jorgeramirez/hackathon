class Usuario < ActiveRecord::Base
  has_secure_password
  has_many :api_keys
  #has_many :roles_usuarios
  #has_many :sucursal_usuarios
  #has_many :sucursales, through: :sucursal_usuarios, autosave: :false
  #has_many :roles, through: :roles_usuarios, autosave: :true
    
  #accepts_nested_attributes_for :sucursales
  #accepts_nested_attributes_for :roles
  has_and_belongs_to_many :roles

  validates :email, email: true, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :nombre, presence: true

  scope :username, -> username { where("username = ?", "#{username}") }

  scope :by_username, -> username { where("username ilike ?", "%#{username}%") }
  scope :by_nombre, -> nombre { where("nombre ilike ?", "%#{nombre}%") }
  scope :by_apellido, -> apellido { where("apellido ilike ?", "%#{apellido}%") }
  scope :by_email, -> email { where("email ilike ?", "%#{email}%") }
  scope :by_all_attributes, -> value { 
    where("nombre ilike ? OR apellido ilike ? OR email ilike ? OR username ilike ? ", 
          "%#{value}%", "%#{value}%", "%#{value}%", "%#{value}%")
  }

  def session_api_key
    api_keys.active.session.first_or_create
  end

  def nombre_completo
    if nombre
      if apellido
        return nombre + apellido
      else
        return nombre
      end
    else
      return "Sin Nombre"
    end
  end

  def getPermisos
    permisos = Array.new
    for rol in roles
      for permiso in rol.recursos
        permisos.push(permiso.codigo)
      end
    end
    return permisos
  end

  def isAuthorized(solicitado)
    for rol in roles
      for permiso in rol.recursos
        if permiso.codigo == solicitado
          puts "El usuario tiene el permiso solicitado " + solicitado
          return true
        end
      end
    end
    return false 
  end
end
