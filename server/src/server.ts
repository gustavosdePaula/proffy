import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.post('/users', (request, response) => {
    const users = [
        { name: "aa"},
        { name: "bb"}
    ]
    
    return (response.json(users))
})




app.listen(3333);
