const loginSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    insertedAt: {
        
    }

})