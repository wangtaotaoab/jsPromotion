import adornCompute from '../lib/adornCompute';
import {trimSpace,digitalize} from '../utils/tools'
// import Compute from '../lib/compute'

// 组件的导入
import ResultComponents from '../components/Result/index'
import InputGroupComponents from '../components/InputGroup/index'
import BtnGroupComponents from '../components/BtnGroup'

@adornCompute

class Caculetor{
// class Caculetor extends Compute{
  // js的类的继承是单继承的  工具类最好不作为类的父类  可以使用装饰的方式
  constructor(el){
    // super();
    this.name = "Caculetor";
    this.el = el;
    this.resultComponents = new ResultComponents();
    this.inputGroupComponents = new InputGroupComponents();
    this.btnGroupComponents = new BtnGroupComponents();
  }
  init(){
    this.render();
    this.bindEvent();
  }

  render(){
    // 创建一个文档碎片
    const oFrag = document.createDocumentFragment();
    oFrag.appendChild(this.resultComponents.tpl());
    oFrag.appendChild(this.inputGroupComponents.tpl());
    oFrag.appendChild(this.btnGroupComponents.tpl());
    this.el.appendChild(oFrag);
  }

  bindEvent(){
    const el = this.el;
    this.oResult = el.getElementsByClassName('result')[0];
    this.oBtnGroup = el.getElementsByClassName('button-group')[0];
    this.oInputs = el.getElementsByClassName('num-input');
    this.oBtnGroup.addEventListener('click',this.oBtnClick.bind(this),false)
  }

  oBtnClick(ev){
    const e = ev || window.event,
          tar = e.target || e.srcElement,//事件源对象
          tagName = tar.tagName.toLowerCase();
    if(tagName === 'button'){
      const method = tar.getAttribute('data-method'),
            fVal = digitalize(trimSpace(this.oInputs[0].value)),
            sVal = digitalize(trimSpace(this.oInputs[1].value));
      this.setRender(method,fVal,sVal);
    }
  }

  setRender(method,fVal,sVal){
    this.oResult.innerHTML = this[method](fVal,sVal);//对象的写法
  }

}
export {Caculetor};