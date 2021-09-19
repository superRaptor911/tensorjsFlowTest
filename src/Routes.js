import LinearRegression from './pages/LinearRegression';
import MainPage from './pages/MainPage';

export const ROUTES = {
  ROOT: {
    path: '/',
    component: MainPage,
  },
  LINEAR_REGRESSION: {
    path: '/linearregression',
    component: LinearRegression,
  },
};
