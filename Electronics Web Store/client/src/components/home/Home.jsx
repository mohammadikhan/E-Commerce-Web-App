
import Banner from './Banner'
import Slider from './Slider'
import Middle from './Middle'

import { Box, makeStyles} from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts as listProducts } from '../../redux/actions/productActions'
import { useEffect } from 'react'
import { products } from '../../constants/data'



const styles = makeStyles({
    component: {
        padding: 10,
        
    },

    rightWrapper: {
        background: '#FFFFFF',
        padding: 7,
        margin: '12px 0 0 10px',
        width: '17%'
    }
})
const Home = () => {
    
    const classes = styles()
    const ad = 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359817_so.jpg'

    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    
    return (
        <div>
            <Box className={classes.component}>
                <Banner/>
                <Box style={{display: 'flex'}}>
                    <Box style={{width: '85%'}}>
                        <Slider 
                            timer={true}
                            title={"Deals"}
                            products={products}
                        />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={ad} style={{width: 250}} />
                    </Box>
                </Box>
                <Middle/>
                <Slider
                    timer={false}
                    title="Our best selling items!"
                    products={products}
                    
                />
                <Slider 
                    timer={false} 
                    title="Other great Products!"
                    products={products}
                />
                <Slider 
                    timer={false} 
                    title="Suggested for you..."
                    products={products}    
                    
                />
                
            </Box>
            
            
        </div>
        
    )
}

export default Home