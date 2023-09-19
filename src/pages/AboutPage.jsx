import styled from "styled-components";
import { ContactUs } from "../components";

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>قصتنا</h2>
            <div className="underline"></div>
          </div>
          <p>
            بناهُ عشق القهوة وشغف بالتميز، متجرنا يعبر عن عالم القهوة بأكمله.
            نحن نفتخر بأن نقدم لكم أجود أنواع البن، محمصة بعناية فائقة لتقديم
            تجربة قهوة استثنائية. مهمتنا هي تقديم القهوة الفاخرة وتجربة فريدة من
            نوعها لعشاق القهوة في كل مكان. نحن نسعى جاهدين لتقديم مجموعة متنوعة
            من النكهات والروائح التي تأسر حواسكم وتأخذكم في رحلة ذواقة لا تُنسى.
            فريقنا مؤلف من خبراء في مجال القهوة يسعون دائمًا لتقديم أفضل
            المنتجات والمشروبات. نحن نسعى لأن نكون مكانًا حيث يلتقي عشاق القهوة
            للتمتع بلحظات من الاسترخاء والتفكير. نحن نحب القهوة بجميع أشكالها،
            من الإسبريسو الغني إلى القهوة المثلجة اللذيذة، ونحن نتطلع دائمًا
            لمشاركة هذا الحب معكم. تفضلوا بزيارتنا في متجرنا لاستكشاف عالم
            القهوة والانغماس في تجربة تذوق فريدة.
          </p>
        </article>
        <section>
          <ContactUs />
        </section>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  section {
    margin: 6rem 0;
  }

  p {
    text-align: center;
    line-height: 2;
    max-width: 55em;
    margin: 0 auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .underline {
    margin: 0 auto;
  }
`;
export default AboutPage;
