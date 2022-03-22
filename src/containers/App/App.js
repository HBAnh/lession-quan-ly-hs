import React from 'react';
import {withStyles} from '@mui/styles';
import styles from './styles';
import { Provider } from 'react-redux';
import configStore from '../../store/configStore';
// import MenuAppBar from './MenuAppBar/MenuAppBar';
import QuanLyHS from '../quanlyhs/QuanLyHS';
import GlobalLoading from '../components/GlobalLoading/GlobalLoading';

const store = configStore();
const App = () => {
  return (
    <Provider store={store}>
      {/* <MenuAppBar/> */}
      <GlobalLoading />
      <QuanLyHS />
    </Provider>
  );
}

export default withStyles(styles)(App);
