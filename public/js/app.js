window.onload = function() {
    Particles.init({
        selector: '.background',
        color: '#75A5B7',
        maxParticles: 130,
        connectParticles: true,
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 200,
              color: '#48F2E3',
              connectParticles: true
            }
          }, {
            breakpoint: 425,
            options: {
              maxParticles: 100,
              connectParticles: true
            }
          }, {
            breakpoint: 320,
            options: {
              maxParticles: 0 
            }
          }
        ]
      });

  };
let nav =  document.querySelector('#home');
let btnToggle =  document.querySelector('.fas');
let navbarSupportedContent = document.querySelector('#navbarSupportedContent')
btnToggle.addEventListener('click',function(){
    if(!navbarSupportedContent.classList.contains('show')){
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
        nav.classList.add('black');
    }else{
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
        nav.classList.remove('black');
    }
});

document.addEventListener('scroll',function(){
  if(scrollY > 200){
    nav.classList.add('bg-black');
  }else{
    nav.classList.remove('bg-black');
  }
})



let projectPhoto =  document.querySelectorAll('.project-photo');
let searchPhoto = document.querySelectorAll('.search-photo');
let btnSow =  document.querySelector('#btn-show')
projectPhoto.forEach((element,index) => {
  element.addEventListener('mouseover',function(){
    searchPhoto[index].style.visibility = "visible";
  })
  element.addEventListener('mouseout',function(){
    searchPhoto[index].style.visibility = "hidden";
  })
});
btnSow.addEventListener('click',function(){
  projectPhoto.forEach(element => {
    element.classList.add('visible');
  });
});








