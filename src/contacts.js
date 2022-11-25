(() => {
    const refs = {
      openContactsBtn: document.querySelector("[data-contacts-open]"),
      closeContactsBtn: document.querySelector("[data-contacts-close]"),
      contacts: document.querySelector("[data-contacts]"),
    };
  
    refs.openContactsBtn.addEventListener("click", toggleContacts);
    refs.closeContactsBtn.addEventListener("click", toggleContacts);
  
    function toggleContacts() {
      refs.contacts.classList.toggle("hidden");
    }
  })();