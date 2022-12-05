
 let c = 5;
 
 
function renderSalaries(boston, container){
  
  var people = boston.data;
   
    people.sort(function(a , b){return b[11] - a [11]});
  
  const len = boston.data.length;
   
  var html = '';

  for(let i = 0 ; i < c ; i++){
    html +=
    
    '<li class="post">' + '<h4>' + people[i][8] + '</h4>' + '<h4>' + '$'+people[i][11] + '</h4>' + people[i][10] + '</h4>' + '<h4>' ;
  }
  
  container.innerHTML = '<ol id = "data">' + html + '</ol>';
  
} 
    

function getValue(){
  
  let val = document.getElementById('userInput').value;
  
  const v1 = parseInt(val, 10);
  
  c = v1;
   
  renderSalaries(boston, document.getElementById('container'));
 
}
 
   
renderSalaries(boston, document.getElementById('container')); 

