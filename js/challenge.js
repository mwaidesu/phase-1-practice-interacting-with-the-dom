document.addEventListener('DOMContentLoaded', allFunctions)

  //create timer
  let counter = document.getElementById("counter");
  let counterVal = parseInt(counter.innerText);

  function AddCounter() {
    counterVal += 1;
    return (counter.innerText = counterVal);
  }
  setInterval(AddCounter, 1000);

  //all functions function

  function allFunctions(){
    pauseCounter();
  }


  // //add
  let plus = document.getElementById("plus");

  plus.addEventListener("click", () => {
    counterVal += 1;
  });

  //minus
  let minus = document.getElementById("minus");

  minus.addEventListener("click", () => {
    counterVal--;
  });
  // heart
  let heart = document.getElementById("heart");
  let likes = document.querySelector(".likes");
  let clicks = 0;

  ///likes
  heart.addEventListener("click", () => {
    function createList(name) {
      let li = document.createElement("li");
      li.textContent = name;

      let clicksArray = [];
      let setTime = 0;

      function clicks() {
        if (setTime === 0) {
          setTime = counterVal;
          clicks += 1;
        }
        else if (counterVal !== setTime) {
          //createList()
          setTime = 0;
          clicksArray = [];
          clicks = 0;
        }
        else if (counterVal === setTime) {
          clicksArray.push(++clicks)
        }

      }
      return li;
    }
    likes.appendChild(createList(`${counterVal} was liked ${clicks + 1} times`))
  })


  //pause 

  let pause = document.getElementById('pause')
  function pauseCounter() {
    pause.addEventListener('click', () => {
      clearInterval(AddCounter)
      pause.innerHTML = 'resume'
      plus.disabled = true
      minus.disabled = true
      likes.disabled = true
      counter.disabled = true
      let elements = form.elements;
      for (let i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = true;
        elements[i].disabled = true;
      }
    })
  }

