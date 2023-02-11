let cards = JSON.parse(content);


function printCards(arr) {
    document.getElementById("result").innerHTML = "";
    let color = "";
    for (let val of arr) {
        if (val.level < 2) {
            color = "success";
        } else if (val.level < 4) {
            color = "warning"
        } else {
            color = "danger"
        }
        document.getElementById("result").innerHTML += `<div class="col-lg-3 col-md-5 col-sm-10 col-xs-12">
      <div class="card shadow-lg mb-5 bg-body rounded" style="width: 18rem;">
      <div class="m-3 d-flex justify-content-between">
          <div>
              <button type="button" class="btn btn-info text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .6rem; --bs-btn-font-size: .75rem;">Task</button>
          </div>
          <div>
              <i class="fa-solid fa-bookmark"></i>
              <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
      </div><div class="card" style="width: 18rem;">
<img src="${val.image}" class="card-img-top" alt="${val.title}">
<div class="card-body">
<h5 class="card-title">${val.title}</h5>
<p class="card-text">${val.description}</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item fa-solid fa-triangle-exclamation "> Priority :<a class="btn btn-sm butlevel btn-${color} ColOr"><span class="result">${val.level}</span></a></p></li>
<li class="list-group-item fa-solid fa-calendar-days"> Deadline: ${val.Date} </li>
</ul>
<div class="d-flex d-flex justify-content-end gap-2">
  <a href=" " class="btn btn-danger"> <i class="fa-solid fa-trash-can"></i> Delete</a>
  <a href=" " class="btn btn-success DoneBtn"> <i class="fa-solid fa-circle-check"></i> Done</a>
</div>
</div>`;
    }
    increaselikes();

}

function increaselikes() {
    let likebtn = document.getElementsByClassName("butlevel");
    for (let i = 0; i < likebtn.length; i++) {
        likebtn[i].addEventListener("click", function() {
            cards[i].level++;
            printCards(cards);
        });
    }
}

printCards(cards);

function sortaa() {
    cards.sort(function(min, max) {
        return max.level - min.level;
    });
}
document.getElementById("sorts").addEventListener("click", function() {
    sortaa();
    printCards(cards);
})