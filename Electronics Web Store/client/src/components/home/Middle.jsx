
import { makeStyles, Box } from '@material-ui/core'
import { images } from '../../constants/data'

const styles = makeStyles({

    wrap: {
       display: 'flex',
       justifyContent: 'space-between'
      
    }
})
const Middle = () => {
    const classes = styles()
    return (
        <Box className={classes.wrap}>
            {
                images.map(image => (
                    <img src={image} style={{width: '15%'}}/>
                ))
            }
        </Box>

    )
}

export default Middle