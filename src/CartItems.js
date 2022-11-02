import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useGlobalContext } from "./context";

const CartItems = ({cartItems}) => {
    const { removeOne, toggleAmount } = useGlobalContext();

    return (  
        <div className="cartItems">
            {cartItems.map(item => {
                const {id, title, price, img, amount} = item;
                return (
                    <div className="item d-flex space-between align-center mb-20" key={id}>

                        <div className="leftSide d-flex">
                            <div className="imgDiv d-flex">
                                <img src={img} alt={title} />
                            </div>
                            <div className="infoDiv">
                                <h4 className="mb-10">{title}</h4>
                                <p className="itemPrice">${price}</p>
                                <p className="removeItem mt-16" onClick={() => removeOne(id)}>remove</p>
                            </div>
                        </div>
                        
                        
                        <div className="rightSide d-flex flex-column align-center">
                            <button onClick={() => toggleAmount(id, "add")}><BsChevronUp /></button>
                            <p className="mt-8 mb-8 fs-16">{amount}</p>
                            <button onClick={() => toggleAmount(id, "substract")}><BsChevronDown /></button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default CartItems;