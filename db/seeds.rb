# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'active_record/fixtures'
ActiveRecord::Fixtures.create_fixtures("#{Rails.root}/test/fixtures", "usuarios")
ActiveRecord::Fixtures.create_fixtures("#{Rails.root}/test/fixtures", "recursos")
ActiveRecord::Fixtures.create_fixtures("#{Rails.root}/test/fixtures", "roles")
ActiveRecord::Fixtures.create_fixtures("#{Rails.root}/test/fixtures", "convocatorias")
ActiveRecord::Fixtures.create_fixtures("#{Rails.root}/test/fixtures", "tipo_operaciones")
ActiveRecord::Fixtures.create_fixtures("#{Rails.root}/test/fixtures", "categorias")
ActiveRecord::Fixtures.create_fixtures("#{Rails.root}/test/fixtures", "items")
