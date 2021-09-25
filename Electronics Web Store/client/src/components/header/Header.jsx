
import {AppBar, Toolbar, makeStyles, Typography, withStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'

// Getting Components
import SearchTool from './SearchTool'
import HeaderButtons from './HeaderButtons'

const styles = makeStyles({
    
    header : {
        background: '#110C0C',
        height: 150,
        
    },

    logo: {
        width: 100,
        marginLeft: '6%',
        
    },

    component: {
        textDecoration: 'none',
        color: 'white'
    }
})

const ToolBar = withStyles({

    root: {
        minHeight: 55
    }
})(Toolbar)

const Header = () => {
    const classes = styles()
    const logo = 'http://assets.stickpng.com/images/5853bcc7ec0c270fc2f62de8.png'
    return (
        <AppBar className={classes.header}>
            <Link to='/' className={classes.component}>
            <ToolBar>
                <img src={logo} className={classes.logo}/>
                <h2> Promo Store</h2>
                <SearchTool> </SearchTool>
                <HeaderButtons/>
            </ToolBar>
            </Link>
        </AppBar>
    )
}

export default Header;