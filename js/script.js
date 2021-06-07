const $form = document.querySelector(".form");
const regexEmail = new RegExp("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
const errorImg = document.querySelector(".error");
const errorText = document.querySelector(".error-info");

$form.addEventListener("submit",e=>{
    e.preventDefault();
    
    if(regexEmail.test(e.target.email.value)){
        e.target.style.border = null;
        errorImg.classList.remove("is-active");
        errorText.classList.remove("is-active");

    }else{
        e.target.style.border = "1px solid red"
        errorImg.classList.add("is-active");
        errorText.classList.add("is-active");
    }
})