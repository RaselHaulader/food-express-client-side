import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';
import CustomerOrders from './components/CustomerOreders/CustomerOrders';
import AllOrder from './components/AllOrder/AllOrder';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/myOrders">
              <CustomerOrders></CustomerOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
              <AllOrder></AllOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/order">
             <Register></Register>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
