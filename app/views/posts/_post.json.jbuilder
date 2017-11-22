json.extract! post, :id, :title, :outline, :detail, :image, :template_id, :user_id, :published, :status, :num_of_planner, :num_of_engineer, :num_of_designer, :num_of_graphicer, :created_at, :updated_at
json.url post_url(post, format: :json)
