export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    const windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }


  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
