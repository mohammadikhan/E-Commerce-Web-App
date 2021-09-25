import { Button, ButtonGroup, makeStyles } from "@material-ui/core"
import { useState } from "react"

const styles = makeStyles({

    comp: {
        marginTop: 30
    },

    button:{
        borderRadius: "30%"
    }

})

const GroupButtons = () => {

    const classes = styles()
    const [counter, setCounter] = useState(1)

    const handleIncrement = () => {
        setCounter(counter => counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter => counter - 1)
    }

    return (
        <ButtonGroup className={classes.comp}>
            <Button onClick={() => handleDecrement()} disabled={counter==1} className={classes.button}>-</Button>
            <Button>{counter}</Button>
            <Button onClick={() => handleIncrement()} className={classes.button}>+</Button>
        </ButtonGroup>
    )
}

export default GroupButtons