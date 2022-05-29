import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.get('/users', (req,res) =>{

    //Busca dados no banco

    const users = [
        {id: 1, name : 'Joao'},
        {id: 2, name : 'Gabriel'},
        {id: 3, name : 'Mario'}
    ]

    // Caso fosse mobile
    if(req.header('Accept')=== 'application/json'){
        return res.json({data: users});
    }

    return res.render('users/list',{users})
})

app.listen(3333) 