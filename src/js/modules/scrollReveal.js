import Scrollreveal from 'scrollreveal';



export function initScrollReveal() {
  Scrollreveal({
    distance: '100%',
    duration: 2800
  })

  Scrollreveal().reveal('.reveal-left', {
    origin: 'left',
    opacity: 0.5
  })

  Scrollreveal().reveal('.reveal-right', {
    origin: 'right',
    opacity: 0.5
  })

  Scrollreveal().reveal('.discover-text', {
    origin: 'bottom',
    opacity: 0,
    delay: 1500,
  })

  Scrollreveal().reveal('.discover-actions', {
    origin: 'bottom',
    opacity: 0,
    delay: 2000
  })

  Scrollreveal().reveal('.hint', {
    origin: 'left',
    opacity: 0,
    delay: 1000,
  })

  Scrollreveal().reveal('.discover__picture-rotation', {
    origin: 'right',
    opacity: 0,
    delay: 1500,
  })

  Scrollreveal().reveal('.partners__title', {
    origin: 'left',
    opacity: 0,
    delay: 200,
    duration: 2200,
  })

  Scrollreveal().reveal('.partners__content', {
    origin: 'right',
    opacity: 0,
    delay: 500,
    duration: 4500,
  })



  Scrollreveal().reveal('.destination-header__content h3', {
    origin: 'top',
    opacity: 0,
  })

  Scrollreveal().reveal('.destination-header__content p', {
    origin: 'top',
    opacity: 0,
    delay: 1500,
  })

  Scrollreveal().reveal('.container-right', {
    origin: 'right',
    opacity: 0,
    delay: 0,
    duration: 7500,
  })

  Scrollreveal().reveal('.subscribe-title', {
    origin: 'left',
    opacity: 0,
    duration: 2200,
  })

  Scrollreveal().reveal('.subscribe-text', {
    origin: 'left',
    opacity: 0,
    delay: 500,
    duration: 2200,
  })

  Scrollreveal().reveal('.subscribe-form', {
    origin: 'right',
    opacity: 0,
    delay: 1100,
    duration: 2200,
  })
}