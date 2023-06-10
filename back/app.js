const express = require ('express');
const path = require ('path');
const app = express ();
const publicPath= path.resolve(__dirname, './public')
const methodOverride =  require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser'); 
var cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
})); 
app.use(cookies()); 

app.set('view engine', 'ejs');

// Middlewares
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
app.use(userLoggedMiddleware); 


// Routers
const mainRouter = require('./src/routes/mainRouter');
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');
const apiRouter = require('./src/routes/apiRouter');

app.use('/' , mainRouter);
app.use('/products' , productsRouter);
app.use('/users' , usersRouter);
app.use('/api', apiRouter);

app.post('/products/search', (req, res) => {
    const searchTerm = req.body.search;
    // Lógica para lidar com a pesquisa usando o valor searchTerm
    const results = products.filter(product => product.name.includes(searchTerm));
  res.render('searchResults', { results });
  });

// Error
app.use((req,res,next)=>{
    res.status(404).render('error')
})

 // Servidor
app.listen (3000, (req, res)=> console.log ('Servidor 3000 funcionando'));