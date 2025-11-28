import { useNavigate } from "react-router-dom";
import { MyntraData } from "../../data";
import "./category.css";

function Category() {
  return (
    <div className="categories">
      <div className="categories_header">
        <span>Shop by Category</span>
      </div>
      <div className="category_content">
        <CategoryRow list={MyntraData.shopCategory.row1} />
        <CategoryRow list={MyntraData.shopCategory.row3} />
        <CategoryRow list={MyntraData.shopCategory.row2} />
      </div>
    </div>
  );
}
export default Category;

const CategoryRow = ({ list }) => {
  const navigate = useNavigate();
  return (
    <div className="category_row">
      {list.map((item, index) => {
        return (
          <img
            src={item}
            alt={item}
            key={index}
            onClick={() => navigate("/products")}
          />
        );
      })}
    </div>
  );
};
