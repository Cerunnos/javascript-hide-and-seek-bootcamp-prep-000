function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n){
  let rl=document.querySelectorAll('.ranked-list')
  n=parseInt(n,10)
  for(let i=0;i<rl.length;i++){
    rl[i].innerHTML=(i+n).toString()
  }
}
function deepestChild(){
  return document.getElementById('grand-node').querySelectorAll('div').innerHTML
}
