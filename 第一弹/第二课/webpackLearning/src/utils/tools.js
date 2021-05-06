function trimSpace(str){
  //去空格
  return str.replace(/\s+/g,'');
}

function digitalize(str){
  //数字化
  return Number(str) || 0;
}
export{
  trimSpace,
  digitalize
}