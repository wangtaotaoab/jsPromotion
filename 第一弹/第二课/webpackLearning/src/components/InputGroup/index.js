import tpl from './index.tpl'

export default class InputGroupComponents {
  constructor(){
    this.name = "InputGroupComponents";
  }
  tpl(){
    const oDiv = document.createElement("div");
    oDiv.className = "input-group";
    oDiv.innerHTML = tpl();
    return oDiv;
  }
}