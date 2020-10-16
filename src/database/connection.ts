import mongoose from 'mongoose';

 mongoose.connect('mongodb://lucas:mypassowe@localhost:27017/login_db', 
    {useNewUrlParser: true}, function (error){
        if(!error) return;
        console.log('Falaha na conexão!', error)
    })

const connection = mongoose.connection

connection.once('open', () => console.log('db Iniciou') )
    setTimeout(()=>{
        const state = connection.readyState
        console.log('State',state)
    }, 1000)

    /*
    0:disconectato
    1: conectado
    2:conectando
    3:disconectado
    */
