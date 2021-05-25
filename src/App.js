import Header from './components/Header';
import Home from './components/Home';
import './css/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

const App = () => {
    return (
        <Router>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/checkout' component={Checkout} />
        </Router>
    );
};

export default App;
