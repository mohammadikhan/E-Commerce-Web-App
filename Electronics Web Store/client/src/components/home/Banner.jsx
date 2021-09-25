import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constants/data'
import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
    image: {
        width: '100%',
        height: 900,
        
    },

    carousel: {
        marginTop: 950
    }
})

const Banner = () => {

    const classes = styles()
    return (
        <Carousel
            autoPlay = {true}
            animation = 'slide'
            navButtonsAlwaysVisible = {true}
            cycleNavigation = {true}
            navButtonsProps= {{
                style: {
                    background: '#F83E3E',
                    color: '#000000'
                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={image} className = {classes.image} />
                ))
            }
        </Carousel>

    )
}

export default Banner