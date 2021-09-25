import { Box, Typography, makeStyles } from "@material-ui/core"
import { useEffect, useState } from "react"

const styles = makeStyles({

    comp: {
        width: "30%",
        background: "#FFFFFF",
        marginLeft: 15
    },

    header: {
        borderBottom: "1px solid #F0F0F0",
        padding: "16px 26px"
    },

    price: {
        float: "right"
    },


    container: {
        padding: "15px 24px",
        "& > *": {
            marginTop: 20,
            fontSize: 15
        }
    },

    totalAmount: {
        fontWeight: 600,
        fontSize: 22,
        borderTop: "2px dashed #E0E0E0",
        padding: "22px 0",
        borderBottom: "2px dashed #E0E0E0"
    }
})

const TotalView = ({ cartItems }) => {
    const classes = styles()

    const [price, setPrice]       = useState(0)
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount()
    }, [cartItems])

    const totalAmount = () => {
        let price = 0, discount = 0
        cartItems.map(item => {
            price    += item.price.mrp
            discount += (item.price.mrp - item.price.cost)
        })

        setPrice(price)
        setDiscount(discount)
    }
    return (
        <Box className={classes.comp}>
            <Box className={classes.header}>
                <Typography style={{fontWeight: 600, fontSize: 22, textAlign: "center"}}>Order Info</Typography>
            </Box>

            <Box className={classes.container}>
                <Typography>Price [{cartItems.length}  item(s)] <span className={classes.price}>${price}</span></Typography>
                <Typography>Discount <span className={classes.price}>-${discount}</span></Typography>
                <Typography>Shipping & Handling Charges<span className={classes.price}>$15</span></Typography>
                <Typography className={classes.totalAmount}>Total<span className={classes.price}>${price - discount + 15}</span></Typography>
                
            </Box>
        </Box>
    )
}

export default TotalView