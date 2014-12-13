#Bursa::Application.config.assets.precompile += ['admin.js', 'admin.css', 'swfObject.js']
Rails.application.config.assets.precompile << Proc.new do |path|
  if path =~ /\.(css|js|jpg|woff|ttf|svg|eot)\z/
    full_path = Rails.application.assets.resolve(path).to_path
    app_assets_path = Rails.root.join('app', 'assets').to_path
    if full_path.starts_with? app_assets_path or 
       full_path.include? 'vendor/assets/stylesheets/theme' or
       full_path.include? 'bootstrap-tagsinput' or
       full_path.include? 'datepicker-bootstrap3' or
       full_path.include? 'theme/index.js' or
       full_path.include? '.jpg' or
       full_path.include? '.woff' or
       full_path.include? '.ttf' or
       full_path.include? '.svg' or
       full_path.include? '.eot' or
      puts "including asset: " + full_path
      true
    else
      puts "excluding asset: " + full_path
      false
    end
  else
    false
  end
end