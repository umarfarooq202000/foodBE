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
    image: "https://i.pinimg.com/236x/8a/28/7d/8a287d3cb3dd22c07fead0c9f51c8eeb.jpg",
    type: " Relevant meat biryani indian ratings 4+ ",
    ratings: "4.5",
    offer: "20%"
  },
  {
    id: 102,
    name: "Chicken Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/8a/28/7d/8a287d3cb3dd22c07fead0c9f51c8eeb.jpg",
    type: " Relevant  meat biryani indian",
    ratings: "4.0"
  },
  {
    id: 103,
    name: "Mutton masala Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/8d/d3/b5/8dd3b54204794c8a9920028f27c8e822.jpg",
    type: " Relevant  meat biryani indian ratings 4+ ",
    ratings: "4.5",
    offer: "20%"
  },
  {
    id: 104,
    name: "Mutton Biryani",
    price: 250,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/42/3d/f9/423df917178263e91dc45e3142d385a3.jpg",
    type: " Relevant  main course meat biryani indian offers",
    ratings: "4.0"
  },
  {
    id: 105,
    name: "Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/f9/46/4f/f9464f711660d57c77965ef80d98da03.jpg",
    type: " Relevant  main course meat biryani indian offers ",
    ratings: "4.0"
  },
  {
    id: 106,
    name: "Corn pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/d3/6e/fe/d36efe28fe4e8da319c9d9b8381e0425.jpg",
    type: " Relevant  pizza veg italian offers ratings 4+",
    ratings: "4.5 "
  },
  {
    id: 144,
    name: "cheese corn pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/07/36/58/0736589667eabf9214006e9ce641dbfa.jpg",
    type: " Relevant  pizza veg italian offers ratings 4+",
    ratings: "4.5"
  },
  {
    id: 107,
    name: " Cheese pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/ae/21/31/ae21317434fb91e0228b2ebdeadcb908.jpg",
    type: " Relevant  pizza veg italian ratings 4+",
    ratings: "4.5",
    offer: "30%"
  },
  {
    id: 108,
    name: "FarmHouse pizza",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/52/ef/a3/52efa3a00863082813205fd5662e36e9.jpg",
    type: " Relevant  pizza veg italian ratings 4+",
    ratings: "4.5"
  },
  {
    id: 109,
    name: "Margrete pizza",
    price: 150,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/e0/3a/1c/e03a1ce909ef8a96707c14c289d8bc9d.jpg",
    type: " Relevant  pizza veg italian",
    ratings: "4.0"
  },
  {
    id: 110,
    name: "Chicken Tikka masala",
    price: 150,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/5c/db/bd/5cdbbd3a5320ede8fc74a205d8044f68.jpg",
    type: " Relevant  meat pakistani",
    ratings: "3.0"
  },
  {
    id: 111,
    name: "Grilled Chicken",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg",
    type: " Relevant  meat pakistani",
    ratings: "3.0"

  },
  {
    id: 112,
    name: " Chicken Afghani",
    price: 130,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/4d/80/60/4d8060aee89f76567f5333e7d09926cf.jpg",
    type: " Relevant  meat afghani offers  ratings 4+",
    ratings: "4.0 "

  },
  {
    id: 113,
    name: "Mohito",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/cd/f1/0b/cdf10bd45a14c646c05e75cc59390b21.jpg",
    type: " Relevant  drinks american",
    ratings: "3.0"

  },
  {
    id: 114,
    name: "virgin Mohito",
    price: 90,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/9c/a4/77/9ca4775742d7da6875a485dc8cf7f79c.jpg",
    type: " Relevant  drinks american",
    ratings: "4.0"

  },
  {
    id: 115,
    name: "Nimbu Paani",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/3e/a0/dc/3ea0dc5c15d1e5e57b8a326b5b1dfd56.jpg",
    type: " Relevant  drinks indian",
    ratings: "3.0"

  },
  {
    id: 116,
    name: " Maharaja Burger",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/f7/2e/7b/f72e7bd407a6bf4b0688347c38264114.jpg",
    type: " Relevant  burger veg korean offers",
    ratings: "3.0"

  },
  {
    id: 117,
    name: "Burger",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/564x/22/29/0d/22290dcfd246cc18d795fe19750e6e68.jpg",
    type: " Relevant  burger veg korean",
    ratings: "4.5 ratings 4+"

  },
  {
    id: 118,
    name: "Cheese Burger",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/a8/e4/67/a8e46738ce2fe13e83c3e3f548214405.jpg",
    type: " Relevant  burger veg korean offers ratings 4+",
    ratings: "4.5"

  },
  {
    id: 119,
    name: "Chicken Cheese Burger",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/be/68/6d/be686dab3797e0b43cba7b663851fd2b.jpg",
    type: " Relevant  burger meat korean",
    ratings: "4.0"

  },
  {
    id: 120,
    name: "Chicken Burger",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/41/f6/1c/41f61ca5c84f6d157d9d3b98536c7207.jpg",
    type: " Relevant  burger meat american",
    ratings: "3.0"

  },
  {
    id: 121,
    name: "Kitkat Shakes",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/7d/bd/51/7dbd5160ae9dc76fd87f9ebb988210bf.jpg",
    type: " Relevant  shakes chinese",
    ratings: "3.0"

  },
  {
    id: 122,
    name: "Oreo shakes",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/58/ee/52/58ee529250709937fe63b056ad23d27f.jpg",
    type: " Relevant  shakes american offers",
    ratings: "4.0"

  },
  {
    id: 123,
    name: "HazleNut",
    price: 95,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/1a/24/c7/1a24c7a60a7ccfd31bed212b59765cf5.jpg",
    type: " Relevant  shakes indian ratings 4+",
    ratings: "4.5 "

  },
  {
    id: 124,
    name: "Strawberry shakes",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/5f/37/b2/5f37b22954a0f3caa7b4b867c59c6fbf.jpg",
    type: " Relevant  shakes italian",
    ratings: "3.0"

  },
  {
    id: 125,
    name: "Hot Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/f8/4a/70/f84a70f0469e904820773d304c4374f8.jpg",
    type: " Relevant  coffee indian",
    ratings: "3.0"

  },
  {
    id: 126,
    name: "cappuccino coffee",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg",
    type: " Relevant  coffee american ratings 4+",
    ratings: "4.0 "

  },
  {
    id: 127,
    name: "Coffee lette",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/f8/4a/70/f84a70f0469e904820773d304c4374f8.jpg",
    type: " Relevant  coffee pakistani",
    ratings: "3.0"

  },
  {
    id: 128,
    name: "Expresso Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/f8/4a/70/f84a70f0469e904820773d304c4374f8.jpg",
    type: " Relevant coffee indian offers ratings 4+",
    ratings: "4.0"

  },
  {
    id: 129,
    name: "Chocolate Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/f8/4a/70/f84a70f0469e904820773d304c4374f8.jpg",
    type: " Relevant  coffee chinese",
    ratings: "3.0"

  },
  {
    id: 130,
    name: "Cold Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/d5/51/da/d551daf3f3062efab638eda193a43201.jpg",
    type: " Relevant  coffee chinese ratings 4+",
    ratings: "4.5"

  },
  {
    id: 131,
    name: "Chinese Noodles",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/c5/8f/d1/c58fd12b65ef692f88fc641a42eabc6c.jpg",
    type: " Relevant  coffee chinese ratings 4+",
    ratings: "4.0"

  },
  {
    id: 132,
    name: " Noodles Manchurian",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/6d/d3/a8/6dd3a8dbd30d8a1946908b0dac109fc3.jpg",
    type: " Relevant  noodles veg chinese",
    ratings: "3.0"

  },
  {
    id: 133,
    name: "Hakka  Noodles",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/ac/02/ba/ac02baefd8296ed62d9b92db5be0ac3f.jpg",
    type: " Relevant  noodles veg korean",
    ratings: "3.0"

  },
  {
    id: 134,
    name: "Chicken Soup Noodle",
    price: 120,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/474x/3c/18/05/3c180580028d6575a434c754c9a8812a.jpg",
    type: " Relevant  noodles meat korean",
    ratings: "3.5"

  },

  {
    id: 135,
    name: "Masala Noodle",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/7e/c1/e2/7ec1e242c20101e7411590416b1cd73f.jpg",
    type: " Relevant  noodles veg indian",
    ratings: "3.7"

  },
  {
    id: 136,
    name: "Fried Momos",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/20/01/2e/20012e13d9777702a111ff3f9adf24d3.jpg",
    type: " Relevant   momos veg chinese",
    ratings: "3.8"

  },
  {
    id: 137,
    name: "steam Momos",
    price: 40,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/8a/a7/e1/8aa7e1031ee43685b9a7d8de1568c583.jpg",
    type: " Relevant   momos veg chinese ratings 4+",
    ratings: "4.2 "

  },
  {
    id: 138,
    name: "Paneer Momos",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/73/d2/fe/73d2fed4697d267c6584bcecbf41a326.jpg",
    type: " Relevant momos veg chinese",
    ratings: "3.6"

  },
  {
    id: 139,
    name: "Chicken Momos",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/b9/b1/e1/b9b1e1c5a7ca350858719d0caed61187.jpg",
    type: " Relevant   momos meat indian ratings 4+",
    ratings: "4.8 "

  },
  {
    id: 140,
    name: "Aaloo Paratha",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/474x/f0/31/3a/f0313a801ff2bcb92ac550ed107144e5.jpg",
    type: " Relevant   parathas veg indian",
    ratings: "4.0"

  },
  {
    id: 141,
    name: "Paneer Paratha",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/0b/dc/46/0bdc46dc718c27683c1dbe6bfa7d50d1.jpg",
    type: " Relevant parathas veg indian",
    ratings: "4.3"


  },

  {
    id: 142,
    name: "Aaloo piyaz Paratha",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/59/cb/67/59cb674867d3b3900085f558008faeb3.jpg",
    type: " Relevant   parathas veg indian",
    ratings: "3.8"

  },

  {
    id: 143,
    name: "Mixed Paratha",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://i.pinimg.com/236x/77/3b/f2/773bf2a828d5308fde6ec71f2df3d4e8.jpg",
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
// app.get('/fooddata', (req, res) => {
//   res.json(foodData);
// });

app.get('/fooddata', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};
  
  if (endIndex < foodData.length) {
    results.next = {
      page: page + 1,
      limit: limit
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    };
  }
  results.results = foodData.slice(startIndex, endIndex);
  res.json(results);
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
