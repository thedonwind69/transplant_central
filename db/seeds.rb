# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.delete_all
City.delete_all

category1 = Category.create(name: 'Food')
category2 = Category.create(name: 'Culture')
category3 = Category.create(name: 'Nightlife')
category4 = Category.create(name: 'Economy')


city1 = City.create(name: 'Atlanta', lat: 33.742048712117665, lng: -84.35295603910001)
city2 = City.create(name: 'Austin', lat: 30.262759631543833, lng: -97.73686638363814)
city3 = City.create(name: 'Boston', lat: 42.361692894513844, lng: -71.06929746394363)
city4 = City.create(name: 'Charlotte', lat: 35.2345927130802, lng: -80.84381868760069)
city5 = City.create(name: 'Chicago', lat: 41.917627177772395, lng: -87.67349035555698)
city6 = City.create(name: 'Dallas', lat: 32.86000154647216, lng: -96.81411535555698)
city7 = City.create(name: 'Denver', lat: 39.74707322796829, lng: -104.99778053886479)
city8 = City.create(name: 'Houston', lat: 29.75981759415382, lng: -95.37211656919426)
city9 = City.create(name: 'Las Vegas', lat: 36.17583509697604, lng: -115.14180604388821)
city10 = City.create(name: 'Los Angeles', lat: 34.044444278512636, lng: -118.23107591646229)
city11 = City.create(name: 'Miami', lat: 25.771450552753034, lng: -80.19195556640625)
city12 = City.create(name: 'Minneapolis', lat: 44.961780532439654, lng: -93.22561250024131)
city13 = City.create(name: 'New York', lat: 40.710723351142036, lng: -73.99953828149131)
city14 = City.create(name: 'Philadelphia', lat: 39.96172990181603, lng: -75.1560745644482)
city15 = City.create(name: 'Phoenix', lat: 33.447676848553236, lng: -112.07067878845227)
city16 = City.create(name: 'Portland', lat: 45.496517747967395, lng: -122.64947632210963)
city17 = City.create(name: 'San Diego', lat: 32.717229909762025, lng: -117.12418238017348)
city18 = City.create(name: 'San Francisco', lat: 37.77216350999896, lng: -122.42068678878651)
city19 = City.create(name: 'Seattle', lat: 47.596949818213, lng: -122.36763960752879)
city20 = City.create(name: 'Washington DC', lat: 38.88260445938967, lng: -77.0458196820871)


