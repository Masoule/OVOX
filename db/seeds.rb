# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

user1 = User.create(
username: 'Zukey',
password: '123456',
first_name: "Zuki", country: "Japan",
image: open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelwvV-gbQZnKT6_hKCviOzzZYNgErpMeKu_DFS9ahSAb6yXSd")
)

user2 = User.create(
username: 'Lukey',
password: '123456',
first_name: "Luke", country: "USA",
image: open("https://lh6.googleusercontent.com/-FW4mELlfTjc/AAAAAAAAAAI/AAAAAAAAAMA/uyZnz9tauUY/photo.jpg")
)

track1 = Track.create(title: "zuke's track",  owner_id: user1.id,
image: open("https://timedotcom.files.wordpress.com/2017/08/170801-burning-man-art.jpg?w=560")
)

track2 = Track.create(title: "luke's track",  owner_id: user2.id,
image: open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTRy7I8EXZmJyUdHX8No6Nd6UmfZQipohXLlGf5d5kimpqf1abw")
)
