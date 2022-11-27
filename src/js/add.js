(() => {
    const refs = {
      openAddBtn: document.querySelector("[data-add-open]"),
      closeAddBtn: document.querySelector("[data-add-close]"),
      add: document.querySelector("[data-add]"),
    };
  
    refs.openAddBtn.addEventListener("click", toggleAdd);
    refs.closeAddBtn.addEventListener("click", toggleAdd);
  
    function toggleAdd() {
      refs.add.classList.toggle("is-hidd");
    }
  })();