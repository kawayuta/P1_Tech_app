require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get posts_url
    assert_response :'success.html.erb'
  end

  test "should get new" do
    get new_post_url
    assert_response :'success.html.erb'
  end

  test "should create post" do
    assert_difference('Post.count') do
      post posts_url, params: { post: { detail: @post.detail, image: @post.image, num_of_designer: @post.num_of_designer, num_of_engineer: @post.num_of_engineer, num_of_planner: @post.num_of_planner, outline: @post.outline, published: @post.published, status: @post.status, template_id: @post.template_id, title: @post.title, user_id: @post.user_id } }
    end

    assert_redirected_to post_url(Post.last)
  end

  test "should show post" do
    get post_url(@post)
    assert_response :'success.html.erb'
  end

  test "should get edit" do
    get edit_post_url(@post)
    assert_response :'success.html.erb'
  end

  test "should update post" do
    patch post_url(@post), params: { post: { detail: @post.detail, image: @post.image, num_of_designer: @post.num_of_designer, num_of_engineer: @post.num_of_engineer, num_of_planner: @post.num_of_planner, outline: @post.outline, published: @post.published, status: @post.status, template_id: @post.template_id, title: @post.title, user_id: @post.user_id } }
    assert_redirected_to post_url(@post)
  end

  test "should destroy post" do
    assert_difference('Post.count', -1) do
      delete post_url(@post)
    end

    assert_redirected_to posts_url
  end
end
