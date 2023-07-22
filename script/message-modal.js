 // validation in modal 
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()


  // modal
  const footerModal = document.getElementById('footer-modal')
  footerModal.addEventListener('show.bs.modal', event => {
      const button = event.relatedTarget
      const fmodaltitle = button.getAttribute('data-bs-title')
      const modalTitle = footerModal.querySelector('.modal-title')
      const modalbody = button.getAttribute('data-contents')
      const fmodalbody = footerModal.querySelector('.modal-body #for')
      const messageType = footerModal.querySelector('.modal-body #message-type')

      messageType.setAttribute('value', fmodaltitle);
      modalTitle.textContent = `${fmodaltitle}`;
      fmodalbody.innerHTML = `${modalbody}`;
  })
