import React from 'react';
import {withStyles} from '@mui/styles';
import styles from './styles';
import { Provider } from 'react-redux';
import configStore from '../../store/configStore';
// import MenuAppBar from './MenuAppBar/MenuAppBar';
import QuanLyHS from '../quanlyhs/QuanLyHS';

const store = configStore();
const App = () => {
  return (
    <Provider store={store}>
      {/* <MenuAppBar/> */}
      <QuanLyHS />
    </Provider>
  );
}

export default withStyles(styles)(App);
