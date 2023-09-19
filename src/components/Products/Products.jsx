import Product from "../Product";
import products from "../../constants";
import "./products.scss";

const Products = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>منتجاتنا</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center products">
        {products.map((product) => {
          return <Product key={product.id} {...product} products={products} />;
        })}
      </div>
    </section>
  );
};

export default Products;
