/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
var box = `<div class="card">
        <div class="header">
          <h1>1</h1>
        </div>

        <div class="container">
          <p>January 1, 2016</p>
        </div>
      </div>`
var string = `<div class="categories">
      <p>Hot</p>
    </div>`
for (var i = 0; i < 10; i++) {
   string += box
  if((i+1)%3 == 0){
    string += `<div class="categories">
      <p>Hot</p>
    </div>`
  }
  }
document.getElementById("film").innerHTML = string;
