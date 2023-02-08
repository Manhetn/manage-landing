export default class Header {
  constructor(elem) {
    this.elem = elem;
    this.body = this.elem.closest('body');
    this.buttonToggleNavigation = this.elem.querySelector(
      '.header__button-toggle-navigation'
    );
    this.links = this.elem.querySelectorAll('.navigation__link');
  }

  init() {
    this.addListeners();
  }

  toggleNavigation() {
    this.elem.classList.toggle('header--navigation-shown');
    this.body.classList.toggle('body--not-scroll');
  }

  addListeners() {
    this.buttonToggleNavigation.addEventListener('click', () => {
      this.toggleNavigation();
    });
    this.links.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          this.toggleNavigation();
          console.log('window.innerWidth', window.innerWidth);
        }
      });
    });

    // window.addEventListener('scroll', () => {
    //   console.log(window.scrollY);
    //   // __button-toggle-navigation--with-bg
    //   // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    // });
  }
}
