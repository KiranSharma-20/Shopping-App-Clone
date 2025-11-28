import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";
import Filter from "../../pages/Filters";
import "./product.css";
import { useMemo, useState } from "react";

function Products() {
  const products = useSelector((state) => state.product.products);

  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");

  const filteredData = useMemo(() => {
    if (search !== " " || price !== " ") {
      let filteredProducts = products.filter((item) => {
        let name = false;
        let brand = false;

        name = item.name.toLowerCase().includes(search.toLowerCase());
        brand = item.brand.toLowerCase().includes(search.toLowerCase());

        return name || brand;
      });

      if (price === "highLow") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      } else {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      }

      return filteredProducts;
    } else {
      return products;
    }
  }, [search, price, products]);

  return (
    <div className="products">
      <div className="breadcrumb">
        <p>
          Home / Clothing / <b>Products</b>
        </p>
      </div>
      <div className="products_container">
        <Filter
          search={search}
          setSearch={setSearch}
          price={price}
          setPrice={setPrice}
        />
        <div className="products_content">
          {filteredData.map((item, index) => {
            return <ProductCard data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Products;
