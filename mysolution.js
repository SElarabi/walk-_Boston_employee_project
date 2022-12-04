function renderTopSalaries(boston, container) {
  
  var people = boston.data;
   
    people.sort(function(a , b){return b[11] - a [11]});
  
  const len = boston.data.length;
   
  var html = '';

  for(let i = 0 ; i < len ; i++){
    html +=
    '<li class="post">' + '<h4>' + people[i][8] + '</h4>' + '<h4>' + people[i][11] + '</h4>';
  }
  
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
}

renderTopSalaries(boston, document.getElementById('container')); 
