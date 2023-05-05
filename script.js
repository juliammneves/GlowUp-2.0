// Form contato animação
const inputs = document.querySelectorAll('.contact-input')

inputs.forEach(ipt => {
    ipt.addEventListener('focus', () => {
        ipt.parentNode.classList.add('focus');
        ipt.parentNode.classList.add('not-empty');
    })
    ipt.addEventListener('blur', () => {
        if(ipt.value == ''){
            ipt.parentNode.classList.remove('not-empty');
        }
        ipt.parentNode.classList.remove('focus');
    })
})
// Form contato animação

//Pop up login
const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".container");
    //faz o pop up aparecer quando aperta em login
formOpenBtn.addEventListener("click", () => home.classList.add("show"))
    //faz o pop up sumir quando aperta fora
document.addEventListener('click', function (event) {
    if (!home.contains(event.target) && event.target !== formOpenBtn) {
        home.classList.remove("show");
    }
});
  
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});
//Pop up login

//Barra de pesquisa
const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('show-search')
    })
}
toggleSearch('search-bar', 'search-button')
//Barra de pesquisa

//Dark mode
const body = document.querySelector('body');
const modeToggle = document.querySelector('.light');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark')
})
//Dark mode

//blog show more, show less
var delay = 260;
function changeText() {
    var label = document.getElementById("myLabel");
    var label1 = document.getElementById("myLabel1");
    var label2 = document.getElementById("myLabel2");
    if (label.innerHTML === "Ver mais") {
      label.innerHTML = "Ver menos";
    } else {
        setTimeout(function() {
            label.innerHTML = "Ver mais";
        }, delay);
    }
    if (label1.innerHTML === "Ver mais") {
      label1.innerHTML = "Ver menos";
    } else {
        setTimeout(function() {
            label1.innerHTML = "Ver mais";
        }, delay);
    }
    if (label2.innerHTML === "Ver mais") {
      label2.innerHTML = "Ver menos";
    } else {
        setTimeout(function() {
            label2.innerHTML = "Ver mais";
        }, delay);
    }
}
//blog show more, show less