import { Product } from "../../interfaces/shop/product";
import "./_products.scss";

const Products = () => {
  const productData: Product[] = [
    {
      pName: "Bag",
      price: 35,
      img: "shop-6",
    },
  ];

  return (
    <div className="product-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img
                src={require("../../assets/images/shop/" + product.img)}
                alt=""
              />
            </div>
            <div className="product-info">
              <h5>{product.pName}</h5>
              <p className="product-price">${product.price}</p>
              <div product-rating>
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
