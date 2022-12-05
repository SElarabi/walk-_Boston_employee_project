
 let c = 5;
 
 var img = document.createElement("img");
 img.src = "./boston.png";
 document.getElementById("header").appendChild(img);
 

function renderHighSalaries(boston, container){
  
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
 
function renderLowSalaries(boston, container){
  
  var people = boston.data;
   
    people.sort(function(a , b){return b[11] - a [11]});
  
  const len = boston.data.length - 1;
  

  console.log('len ==> ' + len);
  console.log('c ==> ' + c);
   
  var html = '';
  for(let i = 0 ; i < c ; i++){
    html +=
    
    '<li class="post">' + '<h4>' + people[(len - i)][8] + '</h4>' + '<h4>' + '$'+people[(len - i)][11] + '</h4>' + people[(len - i)][10] + '</h4>' + '<h4>' ;
  }
 
  container.innerHTML = '<ol id = "data">' + html + '</ol>';
  
} 

function getHighValue(){
  
  let val = document.getElementById('userInput').value;
  
  const v1 = parseInt(val, 10);
  
  c = v1;
   
  renderHighSalaries(boston, document.getElementById('container'));
 
}
 
function getLowValue(){
  
  let val = document.getElementById('userInput').value;
  
  const v1 = parseInt(val, 10);
  
  c = v1;

  
   
  renderLowSalaries(boston, document.getElementById('container'));
 
}
   
renderHighSalaries(boston, document.getElementById('container')); 

