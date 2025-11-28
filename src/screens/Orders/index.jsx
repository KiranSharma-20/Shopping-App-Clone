import { useSelector } from "react-redux";
import HProductCard from "../../Components/HProductCard";
import "./orders.css";

function Orders() {
  const orders = useSelector((state) => state.product.orders);

  return (
    <div className="orders_container">
      <div className="orders_header">
        <span>Orders</span>
      </div>
      <div className="orders_content">
        <span>Total Items : {orders.length}</span>
        {orders.map((item) => {
          return <HProductCard data={item} type={"orders"} />;
        })}
      </div>
    </div>
  );
}
export default Orders;
