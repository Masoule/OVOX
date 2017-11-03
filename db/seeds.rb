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
username: 'Salome',
password: '123456',
first_name: "Salome", country: "Mexico City, Mexico",
image: open("http://s3-us-west-1.amazonaws.com/ovox-dev/tracks/images/000/000/016/original/salome.jpeg?1509679170")
)

user2 = User.create(
username: 'Ashkan',
password: '123456',
first_name: "Ashkan", country: "Tehran, Iran",
image: open("http://s3-us-west-1.amazonaws.com/ovox-dev/tracks/images/000/000/013/original/1230819.png?1509678410")
)

user3 = User.create(
username: 'Lucas',
password: '123456',
first_name: "Luke", country: "Portland",
image: open("http://s3-us-west-1.amazonaws.com/ovox-dev/tracks/images/000/000/019/original/luke.jpg?1509679606")
)

user4 = User.create(
username: 'Vincent',
password: '123456',
first_name: "Luke", country: "USA",
image: open("http://s3-us-west-1.amazonaws.com/ovox-dev/tracks/images/000/000/012/original/shutterstock_62671255.jpg?1509678301")
)

user5 = User.create(
username: 'Raschin',
password: '123456',
first_name: "Raschin", country: "London, UK",
image: open("http://s3-us-west-1.amazonaws.com/ovox-dev/tracks/images/000/000/014/original/raschin.png?1509678705")
)

user6 = User.create(
username: 'Sepans',
password: '123456',
first_name: "Sepand", country: "California",
image: open("http://s3-us-west-1.amazonaws.com/ovox-dev/tracks/images/000/000/015/original/sep.jpeg?1509678852")
)
