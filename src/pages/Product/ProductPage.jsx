import { useState } from "react";
import { useParams } from "react-router-dom";
import { AddToCart, Carousel, Stars } from "../../components";
import { Link } from "react-router-dom";
import products from "../../constants";
import "./productPage.scss";

const initialComments = [
  {
    name: "عبد الرحمن",
    review: "منتج رائع! جودة عالية وسعر مناسب. أنصح به بشدة.",
  },
  {
    name: "جبر",
    review: "التوصيل كان سريعًا جدًا والمنتج يبدو جيدًا. شكرًا لكم!",
  },
  {
    name: "محمد",
    review: "لم يعجبني المنتج كثيرًا. ليس بالجودة التي توقعتها.",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { name, price, stars, description, cover, slide2, slide3 } = product;

  if (!product) {
    return <div>Product not found</div>;
  }

  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <main className="product-page">
      <div className="section section-center page">
        <Link to="/" className={`btn${id}`}>
          العودة إلى الصفحة الرئيسية
        </Link>
        <div className="product-center">
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} />
            <h5 className="price">{price}</h5>
            <p className="desc">{description}</p>
            <hr />
            {<AddToCart product={product} id={id} />}
          </section>
          <Carousel slide1={cover} slide2={slide2} slide3={slide3} />
        </div>
        {/* Comments and Reviews Section */}
        <div className="comments-section my-5">
          <h3>التقييمات والتعليقات</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.name} : </strong>
                {comment.review}
              </li>
            ))}
          </ul>
          <div className="comment-form">
            <textarea
              placeholder="أضف تعليقا"
              value={newComment}
              onChange={handleCommentChange}
            />
            <button className={`btn${id}`} onClick={handleSubmitComment}>
              نشر
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
