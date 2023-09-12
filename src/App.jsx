import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/*

مشروع شركة قهوة:

صفحة المنتج:

1- لكل منتج صفحة لها ألوان خاصة بحسب المنتج، يمكن تعديلها عبر Sass
2- صور المنتج على شكل عرض شرائح (carousel) مع نبذة مختصرة عنه
3- إمكانية إضافة المنتج إلى السلة
4- قسم خاص بتقييمات المستخدمين للمنتج مع التعليقات والنجوم
5- منتجات مشابهة

صفحة الموزعين


 (عبارة عن صفحة تحتوي على الموزعين في مختلف البلدان):
1- مواقع الموزعين على الخريطة (اخترها عشوائية في بلدك)
2- بطاقات تحتوي اسم وعنوان ورقم الهاتف لكل موزع



حول الشركة:


صفحة تحتوي 
نبذة عن تاريخ الشركة
اتصل بنا:
1- إظهار موقع الشركة على الخريطة
2- أيام وساعات عمل الشركة
3- نموذج لإرسال رسالة مع التحقق من البيانات


التقنيات المطلوب استعمالها في الموقع:


HTML - CSS - Bootstrap - JavaScript - jQuery - Sass - Webpack - GIT

*/
