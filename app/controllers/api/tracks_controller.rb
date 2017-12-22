class Api::TracksController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :edit, :update]

  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find_by(id: params[:id])
  end

  def create
    @track = current_user.tracks.new(track_params)

    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = current_user.tracks.find(params[:id])

    if @track.update(track_params)
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = current_user.tracks.find(params[:id])
    @track.destroy
    render json: ["Unable to delete track"], status: 422
  end

  def edit
    @track = Track.find_by(id: params[:id])
  end

  private
  
  def track_params
    params.require(:track).permit(:title, :artist_name, :genre, :description, :image, :track)
  end

end
