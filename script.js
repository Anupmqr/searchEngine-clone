let user = document.querySelector("#user");
let userBox = document.querySelector(".userBox");
user.addEventListener('click',function(){
    userBox.classList.toggle('hovered');
});