function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n){
  let rl=document.getElementById('app').querySelectorAll('ul.ranked-list li')
  n=parseInt(n,10)
  for(let i=1;i<rl.length;i++){
    rl[i].innerHTML=(i+n).toString()
  }
}
