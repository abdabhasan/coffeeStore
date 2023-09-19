import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import { BiSolidCoupon } from "react-icons/bi";
import "./services.scss";

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
    <section className="services">
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
    </section>
  );
};

export default Services;
