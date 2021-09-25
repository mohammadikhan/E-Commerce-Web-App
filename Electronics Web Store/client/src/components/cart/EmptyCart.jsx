import { makeStyles, Box, Typography, Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"

const styles = makeStyles({

    comp: {
        width: "80%",
        background: "#f2f2f2",
        margin: "195px 140px",
        height: "67vh"
    },

    img: {
        width: "15%"
    },

    container: {
        textAlign: "center",
        paddingTop: 70,
        "& > * ": {
            marginTop: 12,
            fontSize: 14
        }
    },

    shopButton: {
        marginTop: 20,
        padding: "14px 70px",
        borderRadius: 2,
        fontSize: 15,
        color: "#FFFFFF",
        background: "green"
    }
})

const EmptyCart = () => {

    const classes = styles()
    const history = useHistory()

    const addItem = () => {
        history.push("/")
    }
    const emptyCartImg = "https://www.nicepng.com/png/detail/322-3224210_your-cart-is-currently-empty-empty-shopping-cart.png"
    return (
        <Box className={classes.comp}>
            <Box className={classes.container}>
                <img src={emptyCartImg} className={classes.img}/>
                <Typography>Your Cart is Empty!</Typography>
                <Typography>Start shopping!</Typography>
                <Button className={classes.shopButton} variant="contained" onClick={() => addItem()}>Shop now!</Button>

            </Box>
        </Box>
    )
}

export default EmptyCart