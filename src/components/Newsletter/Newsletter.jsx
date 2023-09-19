import "./newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="section-center">
        <h3>إشترك في النشرة البريدية للحصول على خصم 20%</h3>
        <div className="content">
          <form
            className="newsletter-form"
            action="https://formspree.io/f/mknlogab"
            method="POST"
          >
            <button type="submit" className="submit-btn">
              إشترك
            </button>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="أدخل بريدك الإلكتروني"
              required
            />
          </form>
          <q>
            لولا مرارة القَهوَة، لما استمتعنا بلذّة الحَلْوَى، وهكذا هِي الحياة.
          </q>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
