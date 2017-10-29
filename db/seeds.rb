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
image: open("")
)

user2 = User.create(
username: 'Lukey',
password: '123456',
first_name: "Luke", country: "USA",
image: open("")
)

track1 = Track.create(title: "zuke's track",  owner_id: user1.id,
image: open("")
)

track2 = Track.create(title: "luke's track",  owner_id: user2.id,
image: open("")
)
