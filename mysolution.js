
let capUserInput = 5;
 
 const fetch = () => {
    
    var people = boston.data;
   
    return people.sort(function(a , b){return b[11] - a [11]});
 };

renderHighSalaries = (boston, container) =>{
  
   let people = fetch();
  
   var html = '';

   for(let i = 0 ; i < capUserInput ; i++){
   
    html +=
    
    '<li class="post">' + '<h4>' + people[i][8] + '</h4>' + '<h4>' + '$'+people[i][11] + '</h4>' + people[i][10] + '</h4>' + '<h4>' ;
  }
  
  container.innerHTML = '<ol id = "data">' + html + '</ol>';
  
} 
 
renderLowSalaries = (boston, container) =>{
  
    let people = fetch();
  
    const len = fetch().length - 1;

    var html = '';
  
    for(let i = 0 ; i < capUserInput ; i++){
    
    html +=
    
    '<li class="post">' + '<h4>' + people[(len - i)][8] + '</h4>' + '<h4>' + '$'+people[(len - i)][11] + '</h4>' + people[(len - i)][10] + '</h4>' + '<h4>' ;
  }
 
  container.innerHTML = '<ol id = "data">' + html + '</ol>';
  
} 

getInputValue = () => {
  
  let val = document.getElementById('userInput').value;
  
  const v1 = parseInt(val, 10);
  
  capUserInput = v1;
   
 
}

showHighSalies = () => {
  getInputValue();
  renderHighSalaries(boston, document.getElementById('container'));
}
 
showLowSalaries = () =>{
  getInputValue();
  renderLowSalaries(boston, document.getElementById('container'));
}


   
renderHighSalaries(boston, document.getElementById('container')); 

