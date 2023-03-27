const button = document.querySelector(".show-cat");
//console.log(button);
const cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function () {
  //console.log(`its working`);
  //cat.classList.add("show");
  if (cat.classList.contains("show")) {
    //console.log(`yes`);
    cat.classList.remove("show");
    button.classList.add("disappear");
    button.innerText = `Wait, come back!`;
  } else {
    //console.log(`no`);
    cat.classList.add("show");
    button.innerText = `Shoo, cat!!`;
    button.classList.remove("disappear");
  }
});
