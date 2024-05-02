/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  document.addEventListener('scroll',()=>{
    const navigation = document.querySelector('.navigation')
    if  (window.scrollY > 0) {
      navigation.classList.add('scrolled');
    }else{
      navigation.classList.remove('scrolled');
    }
  });