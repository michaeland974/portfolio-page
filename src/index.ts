function clickOnEnterKey(this: HTMLElement, e: Event){
  if(e instanceof KeyboardEvent && e.key === "Enter"){
    this.click();
  }
}


