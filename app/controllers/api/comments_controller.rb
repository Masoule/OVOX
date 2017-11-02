class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.user_id = current_user.id
    @comment.track_id = params[:track_id]
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

end
