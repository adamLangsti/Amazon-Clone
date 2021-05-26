import Header from './components/Header';
import Home from './components/Home';
import './css/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Route path='/login' component={Login} />
            <Route path='/' exact>
                <Header />
                <Home />
            </Route>
            <Route path='/checkout'>
                <Header />
                <Checkout />
            </Route>
        </Router>
    );
};

export default App;
