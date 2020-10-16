const Mongoose = require('mongoose')


const loginSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: false
    },

    insertedAt: {
        type: Date,
        default: new Date()    
    },

    UpdatedAt: {
        type: Date,
        default: new Date()    
    },

    LastLogin: {
        type: Date,
        default: new Date()
    }

})

const model = Mongoose.model('Login', loginSchema)

async function main(){
    const resultCadastrar = await model.create({
        name: 'Lucas',
        email: 'lucashendall@gmail.com',
        password: 'teste@2020',

    })

    console.log('result cadastrar: ', resultCadastrar)
}

main()