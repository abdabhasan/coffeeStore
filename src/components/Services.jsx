import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import { BiSolidCoupon } from "react-icons/bi";

const services = [
  {
    id: 1,
    icon: <TbTruckDelivery />,
    title: "شحن سريع",
    text: "دائما يتم شحن منتجاتنا الطازجة مباشرة من المصنع",
  },
  {
    id: 2,
    icon: <AiOutlineSafety />,
    title: "ضمان الحماية",
    text: "ترسل منتجاتنا في عبوات خاصة توفر الحماية الكاملة ضد الحرارة والتأثيرات الخارجية",
  },
  {
    id: 3,
    icon: <BiSolidCoupon />,
    title: "نقاط الخصومات",
    text: "أدخل رقم هاتفك في ملف تعريف الخاص بك واكسب النقاط لكل طلبية",
  },
];

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>مميزات قهوتنا</h3>
        </article>
        <div className="services-center">
          {services.map(({ id, icon, title, text }) => {
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
