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
import AddOffer from './components/AddOffer/AddOffer';
import NotFound from './components/NotFound/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
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
            <PrivateRoute exact path="/addOffer">
              <AddOffer></AddOffer>
            </PrivateRoute>
            <PrivateRoute exact path="/order/:id">
             <Register></Register>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
  
  );
}

export default App;
