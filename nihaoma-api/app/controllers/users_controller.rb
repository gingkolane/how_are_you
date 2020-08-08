class UsersController < ApplicationController
  # before_action :authorized, except: :create

  # get "users"
  def index
    users = User.all
    render json: users
  end

  # get "users/[:id]", to view other user's information, for example, your friend's profile information on wechat
  def show
  # show is used to view other user's information, for example, your friend's profile information on wechat
    user = User.find(params[:id])
    render json: user 

    # render json: {
    #   # token: encode_token(user), 
    #   # userId: user.id, 
    #   user: user,
    #   myConditions: user.conditions,
    #   # myRecords: user.records,
    #   # myTreatments: user.treatments, 
    #   # condition_with_treatment: treatments_for_my_conditions,
    #   myDoctors: user.doctors
    #   # myRecordsInFull: myrecords_infull && 'N/A'
    #   # myRecordsInFull: myrecords_infull if myrecords_infull
    # }
  end 

  # post "/signup", a new user enters its information and post to create a new user in database
  def create
    
    user = User.create(user_params)
    # If user created successfully, server gives the user a json web token, user keeps this token in the browser, and use it in headers to authenticate itself when request information from server
    # If frontend is handled by rails, rails will setup a session(with user_id) to authenticate user and persist user connection. Now react handles frontend, getting data using json, we use json web token. 
    
    if user.valid?
      current_user = user
      current_condition = Condition.find_by(condition_name: params["myCondition"])
      # TODO: Here we want to redesign this when we're ready to take in multiple
      # conditions upon creating a user

    # when a user and his condition is created, a record is created
      # condition_user = ConditionsUser.create(condition_id: current_condition.id, user_id: user.id)
      # doctor is a required field here for some reason, so set doctor id to one for self-described.
      record = Record.create(condition_id: current_condition.id, doctor_id: 1, user_id: user.id, record_type: "self-described")

    # when a user is created, it is automatically assigned to its prospective conditiongroup using GroupsUser model
      group_user = GroupsUser.create(group_id:current_condition.group.id, user_id: user.id)

      render json: {
        token: encode_token(user), 
        currentUser: current_user, 
        myConditions: current_user.conditions,
        myDoctors: current_user.doctors,
        myRecords: current_user.records,
        myTreatments: current_user.my_treatments, 
        myGroups: current_user.groups
      }
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  # get "/profile", view current user's own information
  # def profile

  #   if token
  #   current_user

  #   render json: {
  #     token: token,
  #     currentUser: current_user, 
  #     myConditions: current_user.conditions,
  #     myDoctors: current_user.doctors,
  #     myRecords: current_user.records,
  #     # myTreatments: current_user.my_treatments, 
  #     myGroups: current_user.groups

  #     # condition_with_treatment: treatments_for_my_conditions,
  #     # myRecordsInFull: myrecords_infull && 'N/A'
  #     # myRecordsInFull: myrecords_infull if myrecords_infull
  #   }
  #   end

  # end 

  private
  # note:  rails api, don't need to use require
  def user_params
    params.permit(:username, :password, :myCondition, :realname, :email, :mobile, 
    :status, :age, :gender, :city, :user_pict, :description, :tag, :myConditions)
  end

end


# profile thought process
# # For server to give information from a client get request, server needs to verify token first. 
#     # server takes the token from the get request header  
#     token = request.headers[:Authorization]
#     # server decode the token, the output is an array, first element is payload, second element is headers
#     decode_token = JWT.decode(token, "GloriousPegasus", true, { algorithm: "HS256"})
#     # decoded token has three parts (Header.payload.signature). Payload has the data, such as user_id, and we can take data from payload.
#     user_id = decode_token[0]["user_id"]
#     # find the user using the user_id, and give back the information using render 
#     current_user = User.find(user_id)
# # This continuous four steps logic process was broken into four pieces in applicationController, secret, token, decode_token, current_user
    
 # myrecords_infull = current_user.records.map do |record|

    #   object = {
    #     condition: record.condition,
    #     doctor: record.doctor,
    #     date_of_visit: record.date_of_visit,
    #     treatments: record.treatments
    #   }

    #   object

      # How to handle my treatments need to be thought through: 
      # this would need to be selected or entered separately roughtly as so: 
      # treatments_for_my_condition: treatments_for_my_condition
      # treatment_for_my_conditions: user.conditions.map(|my_condition| my_condition.my_treatments)
      # treatments_for_a_condition: condition.treatments

# Below are old setup with Prince
    # # the treatment for the current conditions can be found through the condition_treatment table
    #   treatments_for_this_condition = current_condition.treatments
    #   # object = {
    #   #   # changed here, it was condition, it should be current_condition
    #   #   name: current_condition.condition_name,
    #   #   treatments: treatments
    #   #   }
    #   # object


    #   treatments_for_my_conditions = user.conditions.map do |condition|
    #     treatments_for_this_condition = condition.treatments
    #     treatments_for_this_user = user.treatments 
    #     treatments = user.treatments & condition.treatments
    #     object = {
    #         name: condition.condition_name,
    #         treatments: treatments
    #     }
    #     object
    #   end


      # myrecords_infull = user.records.map do |record|
      #   object = {
      #     condition: record.condition,
      #     doctor: record.doctor,
      #     date_of_visit: record.date_of_visit,
      #     treatments: record.treatments
      #   }
      #   object
      # end 

            # treatments_for_my_conditions = current_user.conditions.map do |condition|
      #   treatments_for_this_condition = condition.treatments
      #   treatments_for_this_user = current_user.treatments 
      #   treatments = current_user.treatments & condition.treatments
        
      #   object = {
      #     name: condition.condition_name,
      #     treatments: treatments
      #   }

      #   object && 'No treatment yet'
      # end

      # myrecords_infull = current_user.records.map do |record|
      #   object = {
      #     condition: record.condition,
      #     doctor: record.doctor,
      #     date_of_visit: record.date_of_visit,
      #     treatments: record.treatments
      #   }
      #   object && 'No record yet'
      # end 

      # render json: { 
      #   currentUser: current_user, 
      #   myConditions: current_user.conditions,
      #   myRecords: current_user.records ,
      #   myTreatments: current_user.treatments,
      #   # # is the name here correct? what is condition_with_treatment
      #   # condition_with_treatment: treatments_for_my_conditions,
      #   myDoctors: current_user.doctors,
      #   myrecords_infull: myrecords_infull
      # }
    # end