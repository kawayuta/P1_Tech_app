# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

images = [
    'https://www.pakutaso.com/shared/img/page/top_os01.jpg',
    'https://www.pakutaso.com/shared/img/page/top_os02.jpg',
    'https://www.pakutaso.com/shared/img/page/top_os03.jpg',
    'https://www.pakutaso.com/shared/img/page/top_os04.jpg',
    'https://www.pakutaso.com/shared/img/page/top_os05.jpg',
    'https://www.pakutaso.com/shared/img/page/top_os06.jpg'
]
images.each do |img|
  Template.create(image: img) unless Template.find_by(image: img)
end
