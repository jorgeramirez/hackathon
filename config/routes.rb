Bursa::Application.routes.draw do

  resources :personas
  #match '*path', :controller => 'application', :action => 'handle_options_request', via: :options
  resources :usuarios, :controller => "ember", :action => 'start'
  resources :apiKeys, :controller => "ember", :action => 'start'
  resources :recursosRoles, :controller => "ember", :action => 'start'
  resources :rolesUsuarios, :controller => "ember", :action => 'start'
  resources :recursos, :controller => "ember", :action => 'start'
  resources :roles, :controller => "ember", :action => 'start'

  get "/sessions/new" => "ember#start"
  get "ember/start"

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  #root 'welcome#'
  #root :to => 'application#index'

  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :usuarios
      resources :api_keys
      resources :roles
      resources :roles_usuarios
      post 'session' => 'session#create'
    end
  end

  root "ember#start"

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
