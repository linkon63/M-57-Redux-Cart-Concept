import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';
// import Products from '../Products/Products';

const Cart = (props) => {
    // console.log(props);
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h4>Total Order in Cart : {cart.length}</h4>
            {
                cart.map(pd => <li key={pd.cartId}>{pd.name} 
                    <button 
                        onClick={() => {removeFromCart(pd.cartId)}}
                            >X</button>
                            </li>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);