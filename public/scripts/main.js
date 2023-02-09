console.log(`main.js loaded`)

const attrDataExpaned = `data-expanded`

// Main Header
const mainHeaderEl = document.querySelector(`[data-element="main-header"]`)
const mainHeaderExpandEl = document.querySelector(
  `[data-element="main-header-expand"]`
)
const mainHeaderCloseEl = document.querySelector(
  `[data-element="main-header-close"]`
)
const mainHeaderDropdownToggleEls = document.querySelectorAll(
  `[data-element="main-header-dropdown-toggle"]`
)
const mainHeaderDropdownMenuEls = document.querySelectorAll(
  `[data-element="main-header-dropdown-menu"]`
)

mainHeaderExpandEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  mainHeaderEl.setAttribute(attrDataExpaned, true)
})

mainHeaderCloseEl.addEventListener("click", (e) => {
  e.preventDefault()
  mainHeaderEl.removeAttribute(attrDataExpaned)
})

mainHeaderDropdownToggleEls.forEach((mainHeaderDropdownToggleEl) => {
  mainHeaderDropdownToggleEl.addEventListener(`click`, (e) => {
    e.preventDefault()

    const tagName = e.target.tagName
    const parentEl =
      tagName === `DIV`
        ? e.target.parentElement.parentElement
        : e.target.parentElement

    if (parentEl.childNodes.length >= 4) {
      mainHeaderDropdownMenuEls.forEach((mainHeaderDropdownMenuEls) =>
        mainHeaderDropdownMenuEls.removeAttribute(attrDataExpaned)
      )

      const dropdownEl = parentEl.childNodes[3]
      dropdownEl.setAttribute(attrDataExpaned, true)
    }
  })
})

// Header Alert
const alertRemovedAttr = `data-alert-removed`
const resumeBody = document.querySelector(`[data-element="body-resume"]`)
const alertEl = document.querySelector(`[data-element="alert"]`)
const alertCloseEl = document.querySelector(`[data-element="alert-close"]`)
if (alertEl) {
  alertCloseEl.addEventListener(`click`, (e) => {
    e.preventDefault()
    resumeBody.setAttribute(alertRemovedAttr, true)
    alertEl.remove()
  })
}

// All Modals
const ariaExpandedAttr = `aria-expanded`
const modalEls = document.querySelectorAll('.modal')
modalEls.forEach(modalEl => {
  modalEl.setAttribute(ariaExpandedAttr, false)
  
  const modalCloseEl = modalEl.querySelector(`[data-element="modal-close"]`)
  const btnModalCloseEl = modalEl.querySelector(
    `[data-element="btn-modal-close"]`
  )

  modalCloseEl.addEventListener(`click`, (e) => {
    e.preventDefault()
    modalEl.setAttribute(ariaExpandedAttr, false)
  })
  btnModalCloseEl.addEventListener(`click`, (e) => {
    e.preventDefault()
    modalEl.setAttribute(ariaExpandedAttr, false)
  })
})

// Jokes Modal
const btnHeaderJokeMobileEl = document.querySelector(
  `[data-element="btn-header-joke-mobile"]`
)
const btnHeaderJokeEl = document.querySelector(
  `[data-element="btn-header-joke"]`
)
const modalJokesEl = document.querySelector(`[data-element="modal-jokes"]`)


btnHeaderJokeMobileEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  modalJokesEl.setAttribute(ariaExpandedAttr, true)
})
btnHeaderJokeEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  modalJokesEl.setAttribute(ariaExpandedAttr, true)
})


// Image Modal
const srcAttr = `src`
const imgEls = document.querySelectorAll(`img:not(.modal-dialog-image)`)
const modalImageEl = document.querySelector(`[data-element="modal-image"]`)

imgEls.forEach(imgEl => {
  imgEl.addEventListener(`click`, (e) => {
    e.preventDefault()
    const src = imgEl.getAttribute(srcAttr)

    if (modalImageEl) {
      modalImageEl.querySelector(`img.modal-dialog-image`).setAttribute(srcAttr, src)
      modalImageEl.setAttribute(ariaExpandedAttr, true)
    }
  })
})