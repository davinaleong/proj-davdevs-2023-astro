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

// Modal
const openAttr = `data-open`
const btnHeaderJokeMobileEl = document.querySelector(
  `[data-element="btn-header-joke-mobile"]`
)
const btnHeaderJokeEl = document.querySelector(
  `[data-element="btn-header-joke"]`
)
const modalJokesEl = document.querySelector(`[data-element="modal-jokes"]`)
const modalCloseEl = document.querySelector(`[data-element="modal-close"]`)
const btnModalCloseEl = document.querySelector(
  `[data-element="btn-modal-close"]`
)

btnHeaderJokeMobileEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  modalJokesEl.setAttribute(openAttr, true)
})
btnHeaderJokeEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  modalJokesEl.setAttribute(openAttr, true)
})

modalCloseEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  modalJokesEl.removeAttribute(openAttr)
})
btnModalCloseEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  modalJokesEl.removeAttribute(openAttr)
})
