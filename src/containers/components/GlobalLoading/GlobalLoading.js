import { withStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import styles from './styles';
import loadingIcon from '../../../assets/gif/Ajux_loader.gif'

const GlobalLoading = (props) => {
    const {classes} = props;
    const loading = useSelector((state) => state.ui.loading);
    let xhtml = null;
    if(loading){
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={loadingIcon} alt="loading" className={classes.icon} />
        </div>
      )
    }
  return xhtml;
}
export default withStyles(styles)(GlobalLoading);