import { useDispatch, useSelector } from "react-redux";
import "./productCard.css";
import { setCart, setProducts } from "../../redux/Slice/productSlice";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function ProductCard({ data }) {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.product.cart);
  let product = useSelector((state) => state.product.products);

  // const [showAlert, setShowAlert] = useState(false);
  // const [alertMessage, setAlertMessage] = useState("");

  const handleAddToCart = () => {
    // setAlertMessage(`${product.name} has been added to your cart!`);
    // setShowAlert(true);

    if (cart.length === 0) {
      dispatch(setCart([...cart, data]));
    }
    let isExists = cart.filter((item) => item.id === data.id);
    if (isExists.length === 0) {
      dispatch(setCart([...cart, data]));
    } else {
      let values = cart.map((item) => {
        if (item.id === data.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      dispatch(setCart(values));
    }
    toast.success("Added to cart");
  };

  const handleWishlist = () => {
    let values = product.map((item) => {
      return item.id === data.id ? { ...item, wishList: !item.wishList } : item;
    });

    dispatch(setProducts(values));
    toast.success("Item is wishlisted");
  };

  return (
    <div className="product_card">
      <div className="product_card_img">
        <img src={data.imgURIs[0]} alt={data.imgURIs[0]} />
        <div className="product_card_ratings">
          <p>
            <span>{data.rating}</span> <i></i> <span>| {data.reviews}</span>
          </p>
        </div>
        {/* product_fill_heart ; product_empty_heart */}
        <div
          className={
            data.wishList ? "product_fill_heart" : "product_empty_heart"
          }
          onClick={handleWishlist}
        ></div>
      </div>
      <div className="product_card_details">
        <span className="product_card_brand">{data.brand}</span>
        <span className="product_name">{data.name}</span>
        <p className="product_prices">
          Rs. {data.price} <del>Rs. {data.MRP}</del>{" "}
          <span>{`(${data.discount}% OFF)`}</span>
        </p>
      </div>
      <div className="product_card_btn">
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
