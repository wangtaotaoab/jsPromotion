var tools = (function(){
  function digitalize(str){
    // 数字化
    return Number(str.replace(/\s+/g,'')) || 0 ;
  }

  function getTarget(ev){
    // 做事件代理的时候，都会用到事件对象和事件源对象
    var e = ev || window.event; //用来兼容IE
    return e.target || e.srcElement;
  }

  return {
    digitalize:digitalize,
    getTarget:getTarget
  }
})();