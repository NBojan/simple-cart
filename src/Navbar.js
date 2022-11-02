import {RiShoppingCartLine} from "react-icons/ri";
import { useGlobalContext } from "./context";

const Navbar = () => {
    const {amount} = useGlobalContext();

    return (  
        <header>
            <nav className="m-auto d-flex space-between align-center containerBoot">
                <h3 className="col-fff">Simple Cart</h3>
                <div className="positionR cart-div d-flex">
                    <RiShoppingCartLine />
                    <p className="d-flex align-center justify-center">{amount}</p>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;