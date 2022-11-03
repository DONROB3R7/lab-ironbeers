const { debug } = require('console');
const express = require('express');

const hbs = require('hbs');

const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// Add the route handlers here:
app.get('/', (req, res) => {
  punkAPI.getBeers()
  .then(beer => {
    let data = [];
    beerLength = 4;
    if(!beer.length >= 4) beerLength = breer.length;
    for (let index = 0; index < beerLength; index++) {
      data.push(beer[index]);
    }
    res.render('index',{data});
  })
  .catch(error => console.log(error));
 

});


app.get('/beers', (req, res) => {

  punkAPI.getBeers()
  .then(beer => {
    res.render('beers',{beer});
  })
  .catch(error => console.log(error));
});

app.get('/random-beer', (req, res) => {
  punkAPI.getRandom().then(randomBeer => {
    res.render('random-beer', {randomBeer});
  })
  .catch(error => console.log(error));
})

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.listen(3000, () => console.log('🏃‍ on port 3000'));
