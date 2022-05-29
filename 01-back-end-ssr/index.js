import express from 'express'
import cors from 'cors';

const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.set('view engine', 'ejs')

app.get('/users', (req,res) =>{

    //Busca dados no banco

    const users = [
        {id: 1, name : 'Marcos'},
        {id: 2, name : 'Gabriel'},
        {id: 3, name : 'Mario'}
    ]

    // Caso fosse mobile
    if(req.header('Accept') === 'application/json'){
        return res.json({data: users});
    }

    return res.render('users/list',{users})
})

app.listen(3333) 