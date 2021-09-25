import mongoose from 'mongoose'

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.c3cxo.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('[SUCCESS] Datbase was connected successfully')
    } catch (error){
        console.log('[UNSUCCESSFUL] Error: ', error.message)
    }
}

export default Connection