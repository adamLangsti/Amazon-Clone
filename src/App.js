import Header from './components/Header';
import Home from './components/Home';
import './css/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/context/StateProvider';
import Payment from './components/Payment';

const App = () => {
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log('The user is: ', authUser);
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
    }, []);

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
            <Route path='/payment'>
                <Header />
                <Payment />
            </Route>
        </Router>
    );
};

export default App;
