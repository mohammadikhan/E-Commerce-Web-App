import { makeStyles, alpha, InputBase} from "@material-ui/core"
import { Search } from '@material-ui/icons'

const styles = makeStyles((theme) => ({
    search: {
        
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#fff',
        // marginRight: theme.spacing(2),
        marginLeft: 10,
        width: '34%',
        display: 'flex',
        color: 'black'
        
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
      },
      inputRoot: {
        color: 'inherit',
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20
        
      },
}))

const SearchTool = () => {
    const classes = styles()
    return (
        <div className={classes.search}>
            
            <InputBase
              placeholder="Search for electronics, appliances and much more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

            <div className={classes.searchIcon}>
              <Search />
            </div>

          </div>
    )
}

export default SearchTool