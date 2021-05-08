/* 
    出口文件,必须要有出口
 */
import tpl from './index.tpl';
export default class ResultComponents{
  constructor(){
    this.name = "ResultComponents";
  }
  tpl(){
    const oDiv = document.createElement("div");
    oDiv.innerHTML = tpl();
    return oDiv;
  }
}