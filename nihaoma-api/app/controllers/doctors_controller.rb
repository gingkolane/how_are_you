class DoctorsController < ApplicationController

  def index
    doctors = Doctor.all
    render json: doctors
  end

  def show
    doctor = Doctor.find(params[:id])
    render json: doctor
  end 

  def doctorsByCondition(condition)
    byebug
    doctors = Doctor.all
    doctors.select {|doctor| doctor.conditions.include?(condition)} 
    render json: doctors
  end 






end
