import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './views/Auth';
import AuthLanding from './components/Layouts/AuthLanding';
import AuthContextProvider from './contexts/AuthContext';
import Home from './views/Home'
import ProductContextProvider from './contexts/ProductContext';
import CategoryContextProvider from './contexts/CategoryContext';
import BannerContextProvider from './contexts/BannerContext';

function App() {

  return (
    <AuthContextProvider>
      <BannerContextProvider>
        <CategoryContextProvider>
          <ProductContextProvider>
            <Router>
              <Switch>
                <Route exact path = '/' component = {AuthLanding}/>
                <Route exact path = '/login' render = {props => <Auth {...props} authRoute = 'login'/>} />
                <Route exact path = '/register' render = {props => <Auth {...props} authRoute = 'register'/>} />
                <Route exact path = '/welcome' render = {props => <Home {...props} infoRoute = 'welcome'/>} />
                <Route exact path = '/product/:slug' render = {props => <Home {...props} infoRoute = 'product'/>} />
              </Switch>
            </Router>
          </ProductContextProvider>
        </CategoryContextProvider>
      </BannerContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
