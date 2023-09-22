import styled from "styled-components";
import { Link } from "react-router-dom";

const AddToCart = ({ id }) => {
  return (
    <Wrapper>
      <div className="btn-container">
        <Link
          to="/cart"
          className={`btn${id}`}
          onClick={() => console.log("Added to cart")}
        >
          أضف إلى السلة
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }

  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
