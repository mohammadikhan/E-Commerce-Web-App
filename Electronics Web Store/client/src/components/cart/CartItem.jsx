import { Card, makeStyles, Box, Typography, Button } from "@material-ui/core"
import clsx from "clsx"
import GroupButtons from "./GroupButtons"
import { mergeClasses } from "@material-ui/styles"

const styles = makeStyles({

    comp: {
        borderRadius: 0,
        display: "flex",
        borderTop: "1px solid #F0F0F0"
    },

    left: {
        margin: 22,
        display: "flex",
        flexDirection: "column"
    },

    smallText: {
        fontSize: 14
    },

    green: {
        color: "green"
    },

    right: {
        margin: 22
    },

    img: {
        height: 150,
        width: 120

    },

    removeButton: {
        marginTop: 20,
        fontSize: 18,
        backgroundColor: "#F83E3E"
    },

    cost: {
        fontWeight: 600,
        fontSize: 19,
    }
})


const CartItem = ({ item, removeItemFromCart }) => {
    const classes = styles()
    return (
        <Card className={classes.comp}>
            <Box className={classes.left}>
                <img src={item.url} className={classes.img}></img>
                <GroupButtons/>

            </Box>

            <Box className={classes.right}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.green)} style={{marginTop: 22}}>Sold Exclusively By: Vector Engineering</Typography>
                {/* <img src={item.url}></img> */}

                <Typography style={{margin: "21px 0"}}>
                    <span className={classes.cost}>${item.price.cost}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{color: "red"}}><strike>${item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{color: "green"}}>{item.price.discount} OFF</span>
                </Typography>

                <Button variant="contained" className={classes.removeButton} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </Box>

        </Card>
    )
}

export default CartItem