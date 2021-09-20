import LinearRegression from './pages/LinearRegression';
import MainPage from './pages/MainPage';
import PolynomialRegression from './pages/PolynomialRegression';
import QuadraticRegression from './pages/QuadraticRegression';

export const ROUTES = {
  ROOT: {
    path: '/',
    component: MainPage,
  },
  LINEAR_REGRESSION: {
    path: '/linearregression',
    component: LinearRegression,
  },
  QUADRATIC_REGRESSION: {
    path: '/quadreg',
    component: QuadraticRegression,
  },
  POLYNOMIAL_REGRESSION: {
    path: '/polyreg',
    component: PolynomialRegression,
  },
};
