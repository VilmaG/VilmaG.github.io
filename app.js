const express = require('express');
const path = require('path');

const app = express();

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./public/user');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

const mongo_uri = 'mongodb+srv://adminproyect:passw0rd@cluster0.gjafd.mongodb.net/garciaDB'

mongoose.connect(mongo_uri,function(err){
    if(err){
        throw err;
    }else{
        console.log('Successfully connected to ${mongo_uri}');
    }    
});


app.post('/register', (req, res) =>{
    const {username, password} = req.body;

    const user = new User({username, password});

    user.save(err=>{
        if(err){
            res.status(500).send('');
        }else{
            res.status(200).send('');
        }
    });
});

/*app.post('/authenticate', (req, res) =>{
    const {username, password}=req.body;

    User.findOne({username},(err,user)=>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
        }else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else{
            user.isCorrectPassword(password, (err, result)=>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR');
                }else if(result){
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEA INCORRECTA');
                }
            });
        }
    });
});*/

app.listen(3000,() =>{
    console.log('server started');
})

module.exports = app;



