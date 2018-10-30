var nav = document.querySelector('.navigation');
var position = 0;
var navHeight = 60;

// window.addEventListener('scroll', function(){
//   if(window.pageYOffset > 100) {
//     nav.classList += ' narrow';
//   } else {
//     nav.classList = 'navigation';
//   }
// });

window.addEventListener('scroll', function(){
  if (window.pageYOffset < navHeight) {
    console.log('initial');
    nav.classList = 'navigation';
    position = window.pageYOffset;
  }
  else if(position < window.pageYOffset) {
    console.log('down');
    nav.classList += ' navigation--hide';
    position = window.pageYOffset;
  } else {
    console.log('up');
    nav.classList = 'navigation navigation--narrow';
    position = window.pageYOffset;
  }
})