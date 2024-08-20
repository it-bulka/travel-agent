
export function addAnimations() {
  const scrollers = document.querySelectorAll('.scroller');

  scrollers.forEach((el) => {
    el.setAttribute('data-animated', "true")

    const scrollerInner = document.querySelector('.scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}