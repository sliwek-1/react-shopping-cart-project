import express from 'express'
import { shop } from './models/shop.js';
import { storeData, getData } from './dataHandler.js';
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.get('/shop', (req, res) => {
    const shopItem = shop.findAll()
                            .then(response => {
                                res.json(response)
                            })
                            .catch(error => console.log(error))
})

app.post('/catch-payment', (req, res) => {
    let summaryData = req.body

    storeData(summaryData)
    res.status(200).send('Everything is correct');
})

app.get('/get-summary', (req, res) => {
    let dataToSend = getData();
    console.log(dataToSend)
    res.status(200).send(dataToSend)
})

app.listen(3000, () => {
    console.log("aplication listen on port 3000")
})