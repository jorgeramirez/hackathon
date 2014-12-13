require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "#session" do
    joe = usuarios(:joe)
    api_key = joe.session_api_key
    assert api_key.access_token =~ /\S{32}/
    assert api_key.usuario_id == joe.id
  end
end
