import { useParams } from "react-router-dom";
import { AddToCart, Carousel, Stars } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import products from "../constants";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { name, price, stars, description, cover, slide2, slide3 } = product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/" className="btn">
          العودة إلى الصفحة الرئيسية
        </Link>
        <div className="product-center">
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} />
            <h5 className="price">{price}</h5>
            <p className="desc">{description}</p>
            <hr />
            {<AddToCart product={product} />}
          </section>
          <Carousel slide1={cover} slide2={slide2} slide3={slide3} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .carousel img {
    width: 100%;
    height: auto;
    max-height: 90vh;
  }
  .carousel {
    width: 100%;
    overflow: hidden;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default ProductPage;
