
export function addTestimonialsSlider() {
  const scrollers = document.querySelectorAll('.testimonials-scroller');

  scrollers.forEach((el) => {
    el.setAttribute('data-animated', "true")

    const scrollerInner = document.querySelector('.testimonials-scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}