 
 import { products } from "./constants/product.js"
 import Product from './model/productSchema.js'

 const ProvidedData = async () => {

    try {
        await Product.deleteMany({})
        await Product.insertMany(products)
        console.log('[SUCCESS] Data was added')

    } catch(error) {
        console.log('Error: ', error.message)
    }

 }

 export default ProvidedData