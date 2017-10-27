class Api::TracksController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :edit, :update]

  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find_by(id: params[:id])
  end

  def create
    @track = Track.create(track_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  # def destroy
  #   @track = Track.find_by(id: params[:id])
  # end
  #
  # def edit
  #   @track = Track.find_by(id: params[:id])
  # end
  #
  # def update
  #   @track = Track.find_by(id: params[:id])
  # end

  def track_params
    params.require(:track).permit(:title, :artist_name, :genre, :description, :image, :track)
  end

end
