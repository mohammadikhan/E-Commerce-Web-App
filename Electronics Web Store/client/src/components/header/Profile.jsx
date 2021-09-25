import { Menu, Typography, MenuItem, makeStyles } from "@material-ui/core"
import { useState } from "react"
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from 'react-router-dom'

const styles = makeStyles({

    logout: {
        marginLeft: 10,
        fontSize: 15
    },
    comp: {
        marginTop: 40
    }
})

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false)

    const classes = styles()

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const logout = () => {
        setAccount('')
    }
    return (
        <>
            <Link to="/"><Typography onClick={handleClick} style={{ marginTop: 6 }, { color: "#F83E3E" }, { fontWeight: 600 }}>{account}</Typography></Link>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.comp}
            >
                <MenuItem onClick={() => {handleClose(); logout()}}>
                    <LockOpenIcon fontSize="small" color="primary"/>
                    <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
                    
            </Menu>
        </>
    )
}

export default Profile