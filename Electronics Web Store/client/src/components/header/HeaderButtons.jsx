import{ Box, Button, makeStyles, Typography, Badge, } from '@material-ui/core'
import { Link } from 'react-router-dom'
import  { ShoppingCart } from '@material-ui/icons';
import { useContext, useState } from 'react'
import { useSelector } from 'react-redux';

import LoginDialog from '../login/Login'
import Profile from './Profile'
import { LoginContext } from '../../context/ContextProvider'

const styles = makeStyles({

    login: {
        background: '#F83E3E',
        color: 'black',
        textTransfrom: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px'

    },

    wrapper: {
        margin: '0 5% 0 auto',
        display: 'flex',
        '& > *': {
        
            marginRight: 100,
            alignItems: 'center',
           // fontSize: 16,
            textDecoration: 'none',
            color: 'white'
        }
    },

    container: {
        display: 'flex'
    }
})



const HeaderButtons = () =>{
    const classes = styles()
    const [ open, setOpen ] = useState(false)
    const { account, setAccount } = useContext(LoginContext)
    const { cartItems } = useSelector(state => state.cart)

    const openDialog = () => {
        setOpen(true);
    }

    return(
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                <Link to='/'>
                     <Button variant="contained" onClick={() => openDialog() } className={classes.login}>Login</Button>
                </Link>
            }
            <Link to='/cart'className={classes.container}>

            <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCart />
            </Badge>    
            <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>

            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>

    )
}

export default HeaderButtons