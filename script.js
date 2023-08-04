const parallax = document.getElementById("parallax")

window.addEventListener('scroll', () => {
   /* let offset = window.pageYOffset; */ // я так розумію застаріло
   let offset = window.scrollY;
   parallax.style.backgroundPositionY = offset * 0.7 + "px";
   //console.log(`offset: ${offset}`)
   //console.log('offset * 0.7' + offset * 0.7)
   
})