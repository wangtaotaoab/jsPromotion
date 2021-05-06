import adornCompute from '../lib/adornCompute';
import {trimSpace,digitalize} from '../utils/tools'
// import Compute from '../lib/compute'
@adornCompute

class Caculetor{
// class Caculetor extends Compute{
  // js的类的继承是单继承的  工具类最好不作为类的父类  可以使用装饰的方式
  constructor(el){
    // super();
    this.name = "Caculetor";
    this.oResult = el.getElementsByClassName('result')[0];
    this.oBtnGroup = el.getElementsByClassName('button-group')[0];
    this.oInputs = el.getElementsByClassName('num-input');
  }
  init(){
    this.bindEvent();
  }

  bindEvent(){
    this.oBtnGroup.addEventListener('click',this.oBtnClick.bind(this),false)
  }

  oBtnClick(ev){
    const e = ev || window.event,
          tar = e.target || e.srcElement,//事件源对象
          tagName = tar.tagName.toLowerCase();
    if(tagName === 'button'){
      const method = tar.getAttribute('data-method'),
            fVal = digitalize(trimSpace(this.oInputs[1].value)),
            sVal = digitalize(trimSpace(this.oInputs[1].value));
      this.setRender(method,fVal,sVal);
    }
  }

  setRender(method,fVal,sVal){
    this.oResult.innerHTML = this[method](fVal,sVal);//对象的写法
  }

}
export {Caculetor};