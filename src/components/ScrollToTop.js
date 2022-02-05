import { useEffect } from "react";
import { useLocation } from "react-router-dom";


/*function setup(){
  const options = {
      rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
          if(!entry.isIntersecting){
              return;
          }
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
      });
  }, options);
  const h4 = document.querySelectorAll('h4');
  h4.forEach(h => observer.observe(h));
  
}*/
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
   
  }, [pathname]);

  return null;
}