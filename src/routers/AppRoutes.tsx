import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductPage from '../pages/ProductPage';

const AppRoutes = () =>{
    return(
        <div>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/products/:productId' exact component={ProductPage}/>
                <Route path='/cart' component={CartPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
            </Switch>
        </div>
    )
}

export default AppRoutes;