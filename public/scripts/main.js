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

mainHeaderExpandEl.addEventListener(`click`, (event) => {
  event.preventDefault()
  mainHeaderEl.setAttribute(attrDataExpaned, true)
})

mainHeaderCloseEl.addEventListener("click", (event) => {
  event.preventDefault()
  mainHeaderEl.removeAttribute(attrDataExpaned)
})

mainHeaderDropdownToggleEls.forEach((mainHeaderDropdownToggleEl) => {
  mainHeaderDropdownToggleEl.addEventListener(`click`, (event) => {
    event.preventDefault()

    const tagName = event.target.tagName
    const parentEl =
      tagName === `DIV`
        ? event.target.parentElement.parentElement
        : event.target.parentElement

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
  alertCloseEl.addEventListener(`click`, (event) => {
    event.preventDefault()
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

  modalCloseEl.addEventListener(`click`, (event) => {
    event.preventDefault()
    modalEl.setAttribute(ariaExpandedAttr, false)
  })
  btnModalCloseEl.addEventListener(`click`, (event) => {
    event.preventDefault()
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
const btnFooterJokeEl = document.querySelector(
  `[data-element="btn-footer-joke"]`
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
btnFooterJokeEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  modalJokesEl.setAttribute(ariaExpandedAttr, true)
})



// Image Modal
const srcAttr = `src`
const imgEls = document.querySelectorAll(`img:not(.modal-dialog-image)`)
const modalImageEl = document.querySelector(`[data-element="modal-image"]`)

imgEls.forEach(imgEl => {
  imgEl.addEventListener(`click`, (event) => {
    event.preventDefault()
    const src = imgEl.getAttribute(srcAttr)

    if (modalImageEl) {
      modalImageEl.querySelector(`img.modal-dialog-image`).setAttribute(srcAttr, src)
      modalImageEl.setAttribute(ariaExpandedAttr, true)
    }
  })
})



// Forms
const formEls = document.querySelectorAll(`form[method="post"]`)
formEls.forEach(formEl => {
  resetForm(formEl)
  formEl.addEventListener(`submit`, (event) => formSubmitHandler(formEl, event, `Thank you for inquiry. We will get back to you within a few days!`))
})



// Functions
async function postFormDataAsJson(url, formData) {
  const plainFormData = Object.fromEntries(formData.entries())
  const formDataJsonString = JSON.stringify(plainFormData)

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJsonString,
  }

  const response = await fetch(url, fetchOptions)
  return response.json()
}

async function formSubmitHandler(formEl, event, successMessage = ``) {
  console.log(`fn: formSubmitHandler`)

  event.preventDefault()
  disableForm(formEl, true)
  setFormStatusHtml(formEl)

  const form = event.currentTarget
  const url = form.action
  console.log(`action`, url)

  try {
    const formData = new FormData(form)
    const responseData = await postFormDataAsJson(url, formData)
    const { message, status, errors } = responseData

    if (errors) {
      let errorHtml = ``
      const errorKeys = Object.keys(errors)

      errorKeys.map(errorKey => {
        const errorList = errors[errorKey]
        errorList.map(message => errorHtml += `<li class="clr-red-400">${message}</li>`)
      })

      setFormStatusHtml(formEl, errorHtml)
      disableForm(formEl)
    }

    if (status) {
      if (status === "ERROR") {
        setFormStatusHtml(formEl, `
          <li class="clr-red-400">${message}</li>
        `)

        disableForm(formEl)
        return
      } else {
        setFormStatusHtml(formEl,  `
          <li class="clr-green-400">${successMessage}</li>
        `)

        disableForm(formEl)
        formEl.reset()
        return
      }
    }
  } catch (error) {
    console.error(error)
  }
}

function resetForm(formEl) {
  disableForm(formEl)
  setFormStatusHtml(formEl)
  formEl.reset()
}

function disableForm(formEl, disabled = false) {
  console.log(`fn: disableForm`)
  const disabledAttr = `disabled`
  const submitEl = formEl.querySelector(`[type="submit"]`)
  if (disabled) {
    submitEl.setAttribute(disabledAttr, disabled)
  } else {
    submitEl.removeAttribute(disabledAttr)
  }
}

function setFormStatusHtml(formEl, liHtml = ``) {
  console.log(`fn: setFormStatusHtml`)
  formEl.querySelector(`[data-element="form-status"]`).innerHTML = `<ul class="form-error-list">${liHtml}</ul>`
}