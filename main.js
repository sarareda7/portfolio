function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 210; // المسافة قبل ظهور السكشن

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}



// تشغيل الدالة عند الـ Scroll وعند فتح الصفحة
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('header nav'); // تأكدي من اسم كلاس القائمة عندك

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // اختياري: تغيير شكل الأيقونة من (ثلاث شرط) إلى (X) عند الفتح
  const icon = mobileMenu.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});
