import product1i1 from "./assets/product1i1.jpg";
import product1i2 from "./assets/product1i2.jpg";
import product1i3 from "./assets/product1i3.jpg";
import product2i1 from "./assets/product2i1.jpg";
import product2i2 from "./assets/product2i2.jpg";
import product2i3 from "./assets/product2i3.jpg";
import product3i1 from "./assets/product3i1.jpg";
import product3i2 from "./assets/product3i2.jpg";
import product3i3 from "./assets/product3i3.jpg";

const products = [
  {
    id: 1,
    name: "الكابتشينو",
    cover: product1i1,
    slide2: product1i2,
    slide3: product1i3,
    price: "20$",
    stars: 4.9,
    description:
      "نوع من أنواع القهوة التي يمزج معها الحليب وقد اخترعها الإيطاليون، توجد في المقاهي وتزين بأنواع من التزيينات مثل الرغوة أو الكريمة. قد تقدم في أكواب كبيرة، وتُزين أحيانا ببودرة الكاكاو ويقدم معها السكر. الكابتشينو غني بالسعرات الحرارية إذ إن كل كوب يحتوي على 300 سعرات حرارية تقريباً وذلك يعود إلى نسبة الكاربوهيدرات المرتفعة في الكريمة والسكر التي يحضّر منها",
  },
  {
    id: 2,
    name: "القهوة",
    cover: product2i1,
    slide2: product2i2,
    slide3: product2i3,
    price: "15$",
    stars: 4.8,
    description:
      "القهوة مشروب يعد من بذور البن المحمصة، وينمو في أكثر من 70 بلداً. خصوصًا ضمن المناطق الاستوائية في أمريكا الشمالية والجنوبية وجنوب شرق آسيا وشبه القارة الهندية وأفريقيا. ويعتبر البن الأخضر هو ثاني أكثر السلع تداولاً في العالم بعد النفط الخام. ونظراً لاحتوائها على الكافيين، يمكن أن يكون للقهوة تأثير منبه للبشر. تعتبر القهوة في يومنا الحالي واحدة من المشروبات الأكثر شعبية في جميع أنحاء العالم.",
  },
  {
    id: 3,
    name: "القهوة التركية",
    cover: product3i1,
    slide2: product3i2,
    slide3: product3i3,
    price: "15$",
    stars: 5,
    description:
      "نوع من القهوة تُعد باستخدام حبوب البن المطحونة بدقة شديدة دون تصفية. تشير القهوة التركية إلى طريقة لتخمير البن المطحون جيدًا. تعتبر أصناف أرابيكا هي الأفضل، ولكن يتم أيضًا استخدام روبوستا أو مزيج منهما. حيث تطحن الحبوب إلى مسحوق ناعم جدًا، والذي يترك في القهوة عند تقديمه. على الرغم من أن كلمة قهوة ذات أصل عربي، إلا أن ثقافة المقاهي قد ظهرت أيام الدولة العثمانية حينما كانت هذه هي الطريقة الرائجة لتحضير القهوة. ",
  },
];

export default products;
