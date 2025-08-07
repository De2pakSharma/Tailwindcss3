    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      const icon = document.getElementById('menuIcon');
      const isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }

   
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
     function toggleMenu() {
      const menuIcon = document.getElementById("menuIcon");
      const mobileMenu = document.getElementById("mobileMenu");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
      mobileMenu.classList.toggle("hidden");
    }
