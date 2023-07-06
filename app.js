const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

//middleware

app.use(express.json())



//routes
app.get('/happy',(req,res)=>{
    res.send('yay it worked!!!!')
})

app.use('/api/v1/tasks',tasks)


const port = 8000;

app.listen(port , console.log(`app is listening on port ${port}`));