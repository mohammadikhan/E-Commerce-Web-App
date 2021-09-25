import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles, Box, Typography, Button } from "@material-ui/core"
import { removeFromCart} from "../../redux/actions/cartActions"
import { post } from "../../utils/paytm"
import { payUsingPaytm } from "../../service/api"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import TotalView from "./TotalView"


const styles = makeStyles({

    comp: {
        display: "flex",
        padding: "30px 135px",
        marginTop: 155
    },

    left: {
        width: "850px"
    },
    
    right: {

    },

    orderButton: {
        background: "green",
        color: "#FFF",
        borderRadius: 2,
        width: 250,
        display: "flex",
        height: 52,
        marginLeft: "auto"
    },

    bottom: {
       padding: "18px 21px",
       background: "#FFF",
       boxShadow: "0 -2px 12px 0 rgb(0 0 0/12%)",
       borderTop: "1px solid"
    },

    header: {
        padding: "16px 25px",
        background: "#FFF"
    }
})

const Cart = () => {

    const classes = styles()
    const { cartItems } = useSelector(state => state.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(cartItems)
    })

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: "tuff.mohammad@gmail.com"})

        let info = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: response
        }
        post(info)

    }


    return (
        <>
            {
                cartItems.length ? 
                <Box className={classes.comp}>
                    <Box className={classes.left}>

                        <Box className={classes.header}>
                            <Typography style={{fontWeight: 600, fontSize: 20}}>Your Cart [{cartItems.length} item(s)] </Typography>

                        </Box>

                        {
                            cartItems.map(item=>(
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }

                        <Box className={classes.bottom}>
                            <Button onClick={() => buyNow()} className={classes.orderButton} variant="contained">Place your Order</Button>
                        </Box>

                    </Box>
                    
                    <TotalView cartItems={cartItems}/>
                    
                </Box>


                : <EmptyCart/>
            }

        </>
    )
}

export default Cart