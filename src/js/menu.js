(() => {
  
    const menuBtnRef = document.querySelector("[data-menu-button]");    
    const mobileMenuRef = document.querySelector("[data-menu]");
  

  menuBtnRef.addEventListener("click",() => {
    const expanded = 
      menuBtnRef.getAttribute("aria-epanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-epanded", !expanded);

    mobileMenuRef.classList.toggle("is-hidden");
  });
})();