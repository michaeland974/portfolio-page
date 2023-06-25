const nav: Record<string, HTMLLIElement | null> = {
  aboutMe: document.querySelector("[aria-controls='about-me']"),
  projects: document.querySelector("[aria-controls='projects']"),
  contactMe: document.querySelector("[aria-controls='get-in-touch']"),
}

addListeners(Object.values(nav));

function addListeners(elements: (HTMLElement | null)[]){
  elements.forEach((el) => {
    if(el){
      el.addEventListener('click', function(this: HTMLElement){
        console.log(this);
      });
      el.addEventListener('keypress', clickOnEnterKey);
    }
  });
}

function clickOnEnterKey(this: HTMLElement, e: Event){
  if(e instanceof KeyboardEvent && e.key === "Enter"){
    this.click();
  }
}







