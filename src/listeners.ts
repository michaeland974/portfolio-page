type Sections = 'aboutMe' | 'projects'| 'contactMe'

const nav: Record<Sections, HTMLLIElement | null> = {
  aboutMe: document.querySelector("[aria-controls='about-me']"),
  projects: document.querySelector("[aria-controls='projects']"),
  contactMe: document.querySelector("[aria-controls='get-in-touch']"),
}

const views: Record<Sections, HTMLElement | null> = {
  aboutMe: document.querySelector('#about-me'),
  projects: document.querySelector('#projects'),
  contactMe: document.querySelector('#get-in-touch')
}

addListeners(Object.values(nav));

function addListeners(elements: (HTMLElement | null)[]){
  elements.forEach((el) => {
    if(el){
      el.addEventListener('click', toggleAria);   
      el.addEventListener('keypress', clickOnKey);
    }
  });
}

function toggleAria(this: HTMLElement){
  const value: boolean = JSON.parse(this.getAttribute('aria-expanded') as string);
  this.setAttribute('aria-expanded', JSON.stringify(!value));
  
  const siblings = this.parentElement?.children;
  if(siblings){
    const notSelected = [...siblings].filter((el) => el !== this);
    notSelected.forEach((el) => el.setAttribute('aria-expanded', 'false'));
  }
}

function clickOnKey(this: HTMLElement, e: Event){
  if(e instanceof KeyboardEvent && e.key === "Enter"){
    this.click();
  }
}







