const express = require('express');
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json())
const user = {
  name: 'user',
  history: false
}
app.get('/', (req, res) => {
  res.send('root');
})

app.get('/user', (req, res) => {
  res.send(user);
})

app.post('/pom', (req, res) => {
  console.log(req.body)
   res.send('success'); 
})
app.listen(3000);