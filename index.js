const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 9000;

app.use(cors({
  origin: "*"
}));
app.use(bodyParser.json());


const foodData = [
  {

    id: 101,
    name: "Chicken masala Biryani",
    price: 220,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: " server/images/Chicken_masala_Biryani.jpg",
    type: " Relevant meat biryani indian ratings 4+ ",
    ratings: "4.5",
    offer: "20%"
  },
  {
    id: 102,
    name: "Chicken Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: " server/images/chickenBiryani.jpg",
    type: " Relevant  meat biryani indian",
    ratings: "4.0"
  },
  {
    id: 103,
    name: "Mutton masala Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: " server/images/Mutton_masala_Biryani.jpg",
    type: " Relevant  meat biryani indian ratings 4+ ",
    ratings: "4.5",
    offer: "20%"
  },
  {
    id: 104,
    name: "Mutton Biryani",
    price: 250,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/Mutton_Biryani.jpg",
    type: " Relevant  main course meat biryani indian offers",
    ratings: "4.0"
  },
  {
    id: 105,
    name: "Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/Biryani.jpg",
    type: " Relevant  main course meat biryani indian offers ",
    ratings: "4.0"
  },
  {
    id: 106,
    name: "Corn pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/corn_Pizza.jpg",
    type: " Relevant  pizza veg italian offers ratings 4+",
    ratings: "4.5 "
  },
  {
    id: 144,
    name: "cheese corn pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/cheese_corn_pizza.jpg",
    type: " Relevant  pizza veg italian offers ratings 4+",
    ratings: "4.5"
  },
  {
    id: 107,
    name: " Cheese pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/cheese_pizza.jpg",
    type: " Relevant  pizza veg italian ratings 4+",
    ratings: "4.5",
    offer: "30%"
  },
  {
    id: 108,
    name: "FarmHouse pizza",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/farmhouse_pizza.jpg",
    type: " Relevant  pizza veg italian ratings 4+",
    ratings: "4.5"
  },
  {
    id: 109,
    name: "Margrete pizza",
    price: 150,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/margreta_pizza.jpg",
    type: " Relevant  pizza veg italian",
    ratings: "4.0"
  },
  {
    id: 110,
    name: "Chicken Tikka masala",
    price: 150,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/chicken_tikka_masala.jpg",
    type: " Relevant  meat pakistani",
    ratings: "3.0"
  },
  {
    id: 111,
    name: "Grilled Chicken",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/grilled_chicken.jpg",
    type: " Relevant  meat pakistani",
    ratings: "3.0"

  },
  {
    id: 112,
    name: " Chicken Afghani",
    price: 130,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/afghani_chicken.jpg",
    type: " Relevant  meat afghani offers  ratings 4+",
    ratings: "4.0 "

  },
  {
    id: 113,
    name: "Mohito",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/mohito.jpg",
    type: " Relevant  drinks american",
    ratings: "3.0"

  },
  {
    id: 114,
    name: "virgin Mohito",
    price: 90,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/virgin_mohito.jpg",
    type: " Relevant  drinks american",
    ratings: "4.0"

  },
  {
    id: 115,
    name: "Nimbu Paani",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/nimbu_pani.jpg",
    type: " Relevant  drinks indian",
    ratings: "3.0"

  },
  {
    id: 116,
    name: " Maharaja Burger",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/maharaja_burger.jpg",
    type: " Relevant  burger veg korean offers",
    ratings: "3.0"

  },
  {
    id: 117,
    name: "Burger",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/burger.jpg",
    type: " Relevant  burger veg korean",
    ratings: "4.5 ratings 4+"

  },
  {
    id: 118,
    name: "Cheese Burger",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/cheese_burger.jpg",
    type: " Relevant  burger veg korean offers ratings 4+",
    ratings: "4.5"

  },
  {
    id: 119,
    name: "Chicken Cheese Burger",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/chicken_cheese_burger.jpg",
    type: " Relevant  burger meat korean",
    ratings: "4.0"

  },
  {
    id: 120,
    name: "Chicken Burger",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/chicken_burger.jpg",
    type: " Relevant  burger meat american",
    ratings: "3.0"

  },
  {
    id: 121,
    name: "Kitkat Shakes",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/kitkat_shake.jpg",
    type: " Relevant  shakes chinese",
    ratings: "3.0"

  },
  {
    id: 122,
    name: "Oreo shakes",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/oreo_shake.jpg",
    type: " Relevant  shakes american offers",
    ratings: "4.0"

  },
  {
    id: 123,
    name: "HazleNut",
    price: 95,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/hazlenut.jpg",
    type: " Relevant  shakes indian ratings 4+",
    ratings: "4.5 "

  },
  {
    id: 124,
    name: "Strawberry shakes",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/strawberry_shake.jpg",
    type: " Relevant  shakes italian",
    ratings: "3.0"

  },
  {
    id: 125,
    name: "Hot Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/hot_coffee.jpg",
    type: " Relevant  coffee indian",
    ratings: "3.0"

  },
  {
    id: 126,
    name: "cappuccino coffee",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/cappuccino.jpg",
    type: " Relevant  coffee american ratings 4+",
    ratings: "4.0 "

  },
  {
    id: 127,
    name: "Coffee lette",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/coffee_lette.jpg",
    type: " Relevant  coffee pakistani",
    ratings: "3.0"

  },
  {
    id: 128,
    name: "Expresso Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/expresso_coffee.jpg",
    type: " Relevant coffee indian offers ratings 4+",
    ratings: "4.0"

  },
  {
    id: 129,
    name: "Chocolate Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/chocolate_coffee.jpg",
    type: " Relevant  coffee chinese",
    ratings: "3.0"

  },
  {
    id: 130,
    name: "Cold Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/cold_coffee.jpg",
    type: " Relevant  coffee chinese ratings 4+",
    ratings: "4.5"

  },
  {
    id: 131,
    name: "Chinese Noodles",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/chinese_noodles.jpg",
    type: " Relevant  coffee chinese ratings 4+",
    ratings: "4.0"

  },
  {
    id: 132,
    name: " Noodles Manchurian",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/Manchurian_noodles.jpg",
    type: " Relevant  noodles veg chinese",
    ratings: "3.0"

  },
  {
    id: 133,
    name: "Hakka  Noodles",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/haka_noodles.jpg",
    type: " Relevant  noodles veg korean",
    ratings: "3.0"

  },
  {
    id: 134,
    name: "Chicken Soup Noodle",
    price: 120,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/chicken_soup_noodles.jpg",
    type: " Relevant  noodles meat korean",
    ratings: "3.5"

  },

  {
    id: 135,
    name: "Masala Noodle",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/masala_noodles.jpg",
    type: " Relevant  noodles veg indian",
    ratings: "3.7"

  },
  {
    id: 136,
    name: "Fried Momos",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/fried_momos.jpg",
    type: " Relevant   momos veg chinese",
    ratings: "3.8"

  },
  {
    id: 137,
    name: "steam Momos",
    price: 40,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/team_momos.jpg",
    type: " Relevant   momos veg chinese ratings 4+",
    ratings: "4.2 "

  },
  {
    id: 138,
    name: "Paneer Momos",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/paneer_momos.jpg",
    type: " Relevant momos veg chinese",
    ratings: "3.6"

  },
  {
    id: 139,
    name: "Chicken Momos",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/chicken_momos.jpg",
    type: " Relevant   momos meat indian ratings 4+",
    ratings: "4.8 "

  },
  {
    id: 140,
    name: "Aaloo Paratha",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/aalo_paratha.jpg",
    type: " Relevant   parathas veg indian",
    ratings: "4.0"

  },
  {
    id: 141,
    name: "Paneer Paratha",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/paneer_paratha.jpg",
    type: " Relevant parathas veg indian",
    ratings: "4.3"


  },

  {
    id: 142,
    name: "Aaloo piyaz Paratha",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/aalo_piyaz_paratha.jpg",
    type: " Relevant   parathas veg indian",
    ratings: "3.8"

  },

  {
    id: 143,
    name: "Mixed Paratha",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "server/images/mixed_paratha.jpg",
    type: " Relevant   parathas veg indian",
    ratings: "4.0"

  },



];


const pizza_list = foodData.filter(food => food.type.includes('pizza'))
const burger_list = foodData.filter(food => food.type.includes('burger'))
const biryani_list = foodData.filter(food => food.type.includes('biryani'))
const drinks_list = foodData.filter(food => food.type.includes('drinks'))
const shakes_list = foodData.filter(food => food.type.includes('shakes'))
const noodles_list = foodData.filter(food => food.type.includes('noodles'))
const momos_list = foodData.filter(food => food.type.includes('momos'))
const coffee_list = foodData.filter(food => food.type.includes('coffee'))
const parathas_list = foodData.filter(food => food.type.includes('parathas'))






// Define a route to handle API request
app.get('/fooddata', (req, res) => {
  res.json(foodData);
});

app.get('/pizza', (req, res) => {
  res.json(pizza_list)
})
app.get('/burger', (req, res) => {
  res.json(burger_list)
})

app.get('/noodles', (req, res) => {
  res.json(noodles_list)
})

app.get('/momos', (req, res) => {
  res.json(momos_list)
})

app.get('/parathas', (req, res) => {
  res.json(parathas_list)
})

app.get('/coffee', (req, res) => {
  res.json(coffee_list)
})

app.get('/shakes', (req, res) => {
  res.json(shakes_list)
})

app.get('/biryani', (req, res) => {
  res.json(biryani_list)
})

app.get('/drinks', (req, res) => {
  res.json(drinks_list)
})

//taking signUp  data from client side
app.post('/signup', (req, res) => {
  const { username, email, password, number } = req.body;
  // Validate and process the data
  console.log('Received data:', req.body);
  // Respond to the client
  res.status(201).json({ message: 'User registered successfully' });
});




// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
