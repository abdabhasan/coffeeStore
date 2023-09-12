import styled from "styled-components";
import Product from "./Product";
import img1 from "../assets/product1i1.jpg";
import img2 from "../assets/product2i1.jpg";
import img3 from "../assets/product3i1.jpg";

const products = [
  {
    id: 1,
    name: "الكابتشينو",
    image: img1,
    price: "20$",
  },
  {
    id: 2,
    name: "القهوة",
    image: img2,
    price: "15$",
  },
  {
    id: 3,
    name: "القهوة التركية",
    image: img3,
    price: "15$",
  },
];

const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>منتجاتنا</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
