const buttons = document.querySelectorAll(".buttons");
const galleryimages = document.querySelectorAll(".image");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryimages.forEach(image => {

            if(filter === "all"){
                image.style.display = "block";
            }
            else if(image.classList.contains(filter)){
                image.style.display = "block";
            }
            else{
                image.style.display = "none";
            }

        });

    });

});
const images = document.querySelectorAll(".image img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateButtons(){
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
}

images.forEach((img, index) => {

    img.parentElement.addEventListener("click", (e) => {
        e.preventDefault();

        currentIndex = index;

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

        updateButtons();
    });

});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {

    if(currentIndex < images.length - 1){

        currentIndex++;
        lightboxImg.src = images[currentIndex].src;

        updateButtons();
    }

});

prevBtn.addEventListener("click", () => {

    if(currentIndex > 0){

        currentIndex--;
        lightboxImg.src = images[currentIndex].src;

        updateButtons();
    }

});