function showmessage(){
    let email=document.querySelector(".mailid").value;
     let name=document.querySelector(".name").value;
      let phone=document.querySelector(".number").value;
       let message=document.querySelector(".mess").value;

    if(email===""|| name===""|| phone===""|| message===""){
        alert("Please enter your details !");
    }
    else{
        alert("Thanks for your response")
    }
}





let slides = document.querySelector(".slides");
let dots = document.querySelectorAll(".dot");
let index = 0;

const totalSlides = 5;

function updateSlider(){
    slides.style.transform = `translateX(-${index * 300}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Next button
document.querySelector(".next").addEventListener("click", () => {
    if(index < totalSlides - 1){
        index++;
        updateSlider();
    }
});

// Prev button
document.querySelector(".prev").addEventListener("click", () => {
    if(index > 0){
        index--;
        updateSlider();
    }
});

// Click dots
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });
});