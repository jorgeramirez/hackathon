#!/bin/bash

# script para generar build de Producción
# Usage: ./build.sh <usuario bitbucket>
user=$1
echo "Estableciendo usuario a $user"
git remote set-url origin "https://$user@bitbucket.org/rparra/bursa.git"
echo "Actualizando repositorio..."
git pull
echo "Precompilando assets...."
RAILS_ENV=production bundle exec rake assets:precompile --trace -v
RAILS_ENV=production bundle exec rake assets:precompile --trace -v
#echo "Generando base de datos..."
#RAILS_ENV=production rake db:drop db:create db:migrate db:seed
echo "Reiniciando apache"
service apache2 restart
echo "Fin"