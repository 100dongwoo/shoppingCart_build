import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import NavBar from './component/Navbar';
import SideDrawer from './component/SideDrawer';
import { useState } from 'react';
import Backdrop from './component/Backdrop';
function App() {
    const [
        sideToggle,
        setSideToggle,
    ] = useState(false);
    return (
        <Router>
            <NavBar
                click={() =>
                    setSideToggle(true)
                }
            />
            <SideDrawer
                show={sideToggle}
                click={() =>
                    setSideToggle(false)
                }
            />
            <Backdrop
                show={sideToggle}
                click={() =>
                    setSideToggle(false)
                }
            />
            <main>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={
                            HomeScreen
                        }
                    />
                    <Route
                        exact
                        path="/product/:id"
                        component={
                            ProductScreen
                        }
                    />
                    <Route
                        exact
                        path="/cart"
                        component={
                            CartScreen
                        }
                    />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
