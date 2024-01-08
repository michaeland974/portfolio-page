const selected = document.querySelectorAll(".scrollspy");

const observer = new IntersectionObserver((elements) => {
  elements.forEach((el) => {
    if(el.isIntersecting){
      el.target.classList.add('is-visible');
    }
    else{
      el.target.classList.remove('is-visible');
    }
  });
}, {threshold: [0.72]});

selected.forEach((el) => observer.observe(el));








