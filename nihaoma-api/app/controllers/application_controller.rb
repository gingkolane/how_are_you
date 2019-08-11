class ApplicationController < ActionController::API
  # before_action :authorized

  # This is needed for creating a token when a new user is created
  # secret is the server secret.
  def secret
    # Rails.application.credentials.my_app_secret
    'GloriousPegasus'
  end

  # ---------------------
  # In creating a new user, server gives back a encode_token to the newly created user
  def encode_token(user)
    payload = {user_id: user.id}
    JWT.encode(payload, secret, 'HS256')
  end

  # --------------
  # To verify user requests, we need the token from user, which resides in the headers of the request. 
  def token
    # request.headers['Authorization'].split(' ')[1] if request.headers["Authorization"]
    request.headers['Authorization'] if request.headers["Authorization"]
  end

  # we user the token to find the current_user, this does not work when app first start, because there is no token at the start.
  # def current_user
  #   # server decode the token, the output is an array, first element is payload, second element is headers
  #   decoded_token = JWT.decode(token, secret, true, { algorithm: "HS256"})
  #   # decoded token has two parts, payload is the first element, headers is the second element, we take information from payload, in this case, the user_id
  #   user_id = decoded_token[0]["user_id"]
  #   # find the user using the user_id, and give back the information using render 
  #   current_user = User.find(user_id)
  # end 

  def decoded_token
    begin
      JWT.decode(token, secret, true, { algorithm: "HS256" })
    rescue JWT::DecodeError
      nil
    end
  end

  def current_user
    User.find(decoded_token[0]["user_id"]) if decoded_token
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: "Please log in" }, status: :unauthorized unless logged_in?
  end
end
