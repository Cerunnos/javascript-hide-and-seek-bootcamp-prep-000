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
  let currentLevel=document.getElementById('grand-node')
  let nextLevel=currentlevel.children[0]
  while(nextLevel){
    currentLevel=nextLevel
    nextLevel=currentLevel.children[0]
  }

  return currentLevel
}
