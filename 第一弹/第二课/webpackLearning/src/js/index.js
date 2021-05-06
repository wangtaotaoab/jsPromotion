// index.js的文件名 要和html的文件名一样
import {Caculetor} from '../modules/Caculetor'
;((doc)=>{
  const oCalculator = doc.getElementsByClassName('J_calculator')[0];

  const init = ()=>{
    new Caculetor(oCalculator).init()
  }

  init();
})(document)