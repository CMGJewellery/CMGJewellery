# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


random_password = Devise.friendly_token.first(8)
admin = User.new(
  email: "minhtestcode@gmail.com", 
  password: random_password, 
  name: "Minh Bác Ái",
  role: 'admin'
)
admin.skip_confirmation!
admin.save!

product = Product.create!([
  {name: 'White Sapphire Kula Eternity Bracelet', 
  user_id: '1', 
  description: 'Featuring a contemporary, white sapphire-set bar this 18 carat rose gold vermeil Kula Eternity bracelet takes inspiration from the band of gemstones seen in the eternity ring style and adds eye-catching elevation to any bracelet stack. Its arch has been anthropometrically designed to comfortably flatter the wrist.',
  advantage_1: 'Our Kula bracelets feature the adjustable nugget fastening',
  advantage_2: 'Ultimate bracelet for stacking',
  advantage_3: 'Match with more rose gold or mix this in with your silver and yellow gold bracelets',
  collection: 'Biography',
  price: '2782708',
  category_name: 'Bracelet',
  status: 'public',
  gem_stone_id: '8', metal_id: '3', amount: '12'
},

  {name: 'Mille Beaded Ring',
  user_id: '1',
  description: 'Presenting a tactile and modern stacking ring for any occasion, thisdemi-fine Mille Beaded Ring is crafted from 18 carat yellow gold vermeil and features an intriguing, beaded surface inspired by the traditional millegrain jewellery technique.',
  advantage_1: 'Beads interlock when more than one Mille Beaded Ring is worn',
  advantage_2: 'Textured appearance enhanced by polished finish',
  advantage_3: 'Modern ring with a slightly vintage feel',
  collection: 'Floris',
  price: '1636887',
  category_name: 'Ring',
  status: 'public',
  gem_stone_id: '2', metal_id: '4', amount: '22'
},
  {name: 'White Sapphire Kula Eternity Bracelet', 
  user_id: '1', 
  description: 'Featuring a modern, white sapphire-set bar this silver Kula Eternity bracelet interprets the band of gemstones seen in the eternity ring and offers elevated sparkle to any everyday bracelet stack. The arch of this bracelet has been anthropometrically designed to sit comfortably and flatteringly against the wrist.',
  advantage_1: 'Kula nugget fastening gives adjustable fit',
  advantage_2: 'The ultimate piece for stacking up the wrist',
  advantage_3: 'Mix with gold and rose gold bracelets or match with other silver pieces',
  collection: 'Biography',
  price: '3182708',
  category_name: 'Bracelet',
  status: 'public',
  gem_stone_id: '2', metal_id: '3', amount: '7'
},
  {name: 'Turquoise Vera Drop Hoop Earrings', 
  user_id: '1', 
  description: 'As part of the Stilla collection, these demi-fine Vera Drop Hoop Earrings feature suspended turquoise gemstone spheres that have been carefully selected for their beautiful blue colouring and statement appearance. These gemstones have been paired with tonal 18 carat rose gold vermeil hoops and celebrate semi-precious stones with a modern design approach.',
  advantage_1: "Turquoise brings an energising pop of colour that's perfect for summer",
  advantage_2: "Inspired by the flamboyant style of Peggy Guggenheim and the kinetic work of artist Alexander Calder",
  advantage_3: "Turquoise brings an energising pop of colour that's perfect for summer",
  collection: 'Stilla',
  price: '4665033',
  category_name: 'Earrings',
  status: 'public',
  gem_stone_id: '3', metal_id: '1', amount: '17'
}
])

gemstone = GemStone.create!([
  {name: 'Pearl', color: '#FFFFFF'},
  {name: 'Moonstone', color: '#F4F8F0'},
  {name: 'Apatite', color: '#8DD2C1'},
  {name: 'Cultured Freshwater Pearl', color: '#F0F2E4'},
  {name: 'Cultured White Sapphire', color: '#EBEDDF'},
  {name: 'Diamond', color: '#FAFDFC'},
  {name: 'Ruby', color: '#934049'},
  {name: 'Sapphire', color: '#2E51C8'},
  {name: 'Rose Quartz', color: '#F3B5CA'},
  {name: 'Pink Opal', color: '#EAEAEA'}

])
metal = Metal.create!([
  {name: 'Black Ruthenium Plated', color: '#020202'},
  {name: 'Rose Gold (Solid)', color: '#FEE6D4'},
  {name: 'Rose Gold (Vermeil)', color: '#E38450'},
  {name: 'Sterling Silver', color: '#CECECE'},
  {name: 'White Gold (Solid)', color: '#F7F7F7'},
  {name: 'Yellow Gold (Solid)', color: '#DFC58C'},
  {name: 'Yellow Gold (Vermeil)', color: '#C8C578'}
])
