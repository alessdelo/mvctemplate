const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// Import variable from heroku
// const varFromHeroku = process.env.VAR_FROM_HEROKU

var index = 'pages/index'
var pageData = {}

var importHome = require('./routes/home.js')
pageData.home = importHome.addJson

var importPag2 = require('./routes/pag2.js')
pageData.pag2 = importPag2.addJson

var importPag3 = require('./routes/pag3.js')
pageData.pag3 = importPag3.addJson

console.log(importPag3.addJson)
// console.log(pageData)


for(k in pageData) {
  
   console.log("lev.1) " + k + ": " + pageData[k])
  
    for(kk in pageData[k]) {
               
        pageData[k].header = "../partials/header2.ejs"
        pageData[k].nav = "../partials/nav.ejs"
        pageData[k].footer = "../partials/footer2.ejs"
        console.log(kk + ": " + pageData[k][kk])

    }

}

// console.log(pageData)


var app = express()
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', './views')
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render(index,pageData.home))

 

// ---------------------------------
// home

app.get('/home', (req, res) => res.render(index,pageData.home))

// ---------------------------------
// pag2

app.get('/pag2', (req, res) => res.render(index,pageData.pag2))

// ---------------------------------
// pag3

app.get('/pag3', (req, res) => res.render(index,pageData.pag3))

// ---------------------------------
// ---------------------------------
// ---------------------------------

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
