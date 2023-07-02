const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'grocerylist'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',async (request, response) =>{
    const grocerylistItems = await db.collection('tolist').find().toArray()
    response.render('index.ejs', {list : grocerylistItems})
})

app.post('/addToList', (request, response) =>{

    db.collection('tolist').insertOne({item: request.body.groceryItem, completed: false})
    .then(result => {
        console.log('Grocery Item added')
        response.redirect('/')
    })
    .catch(error => console.log(error))

})

app.put('/markComplete', (request,response) =>{
    db.collection('tolist').updateOne({item: request.body.itemFromJS},{
        $set: {
            completed: true
          }
    }).then(result => {
        console.log('Marked Complete')
        response.json('Marked Complete')
    })
    .catch(error => console.error(error))
})

app.put('/markUncomplete', (request,response) => {
    db.collection('tolist').updateOne({item: request.body.itemFromJS},{
        $set: {
            completed: false
        }
    }).then(result =>{
        console.log('Marked Uncomplete')
        response.json('Marked Uncomplete')
    }).catch(error => console.log(error))

})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running successfully on port ${PORT}`)
})