const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    console.log('Here')
    res.render('index', {text: "Welcome to"})
})

const userRouter = require('./routes/users.js')
const postsRouter = require('./routes/posts.js')

app.use('/users', userRouter)
app.use("/posts", postsRouter)

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log('Server running on port 3000'))