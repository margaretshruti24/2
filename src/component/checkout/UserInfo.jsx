import React from "react";
import { useContext,useState,useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import "./UserInfo.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


function UserInfo() {
  const [verify, setVerify] = useState(true);
  return (
    <div className="user-info_container">
      <ContactInformation />
      <ShippingAddress verify={verify} updateVerify={setVerify}/>
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="contact-info_container">
      <h3>Contact Information</h3>
      <input type="email" placeholder="Email" />
    </div>
  );
}

function ShippingAddress( {verify,updateVerify}) {
  const { emptyCart, cart } = useContext(CartContext);

  
  let navigate = useNavigate();

 
  const totalPrice = cart.reduce((accumulator, current) => {
    return accumulator + current.price * current.qty;
  }, 0);






  return (
    <div className="shipping-address_container">
      <h3>Shipping Address</h3>
      <div className="shipping-address_wrapper">
        <input type="name" placeholder="First name" id="firstname" />
        <input type="name" placeholder="Last name" id="lastname" />
        <input type="name" placeholder="Address" id="address" />
        <input type="name" placeholder="City" id="city" />
        </div>
        <div className="shipping-address_container">
          
      <div>
      <button style={{marginTop: "30px"}} className="checkout-btn" onClick={() => {
  emptyCart();
  toast.success("Order placed");
}}>
  Place Order (Only COD available)
</button>
</div>
      </div>

    </div>
  );
}

export default UserInfo;
