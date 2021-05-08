import tpl from './index.tpl'

export default class BtnGroupComponents{
  constructor(){
    this.name = "BtnGroupComponents";
  }
  tpl(){
    const oDiv = document.createElement("div");
    oDiv.className = 'button-group';
    oDiv.innerHTML = tpl();
    return oDiv;
  }
}