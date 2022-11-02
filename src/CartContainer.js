import { useGlobalContext } from "./context";
import CartItems from "./CartItems";

const CartContainer = () => {
    const { cart, total, clearCart, refreshCart } = useGlobalContext();

    return (  
        <div className="containerBoot m-auto mt-40 mb-40 cartContainer">
            <h2 className="uppercase ta-center mb-40">Your Bag</h2>

            {!cart.length && 
                <div className="ta-center">
                    <h4 className="mb-12">is currently empty</h4>
                    <p className="removeItem" onClick={refreshCart}>Refresh here</p>
                </div>
            }

            {cart.length > 0 && (
                <div className="cart">
                    <CartItems cartItems={cart} />

                    <div className="total d-flex space-between align-center mb-40">
                        <h4 className="l-spacing-18">Total</h4>
                        <h4>${total}</h4>
                    </div>

                    <div className="clearDiv ta-center">
                        <button className="btn" onClick={clearCart}>Clear Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default CartContainer;