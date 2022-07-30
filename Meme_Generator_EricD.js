
const memeImages = [
    "meme_img_1.jpg",
    "meme_img_2.jpg",
    "meme_img_3.jpg",
    "meme_img_4.jpg",
    "meme_img_5.jpg",
    "meme_img_6.jpg",
    "meme_img_7.jpg"
]

const scrollBtn = document.getElementById("scroll");
scrollBtn.addEventListener("click", function(){
    selectImg();
});

function selectImg () {
    console.log("clicked");
    let randomIndex = Math.floor(Math.random() * memeImages.length)
    let chosenImage = memeImages[randomIndex]
    console.log("seectedImiage", chosenImage);
    photoChoice = document.getElementById('meme-photo').src = `/MemePhotos/${chosenImage}`
    console.log("PHOTO CHOICE", photoChoice)
}

const submitMeme = document.querySelector("#meme-generator"); // form name
const submitCaption = document.querySelector("input[name = 'caption']"); // the input
const memeResults = document.querySelector("#entered-caption") // the results div
const memePhotoResults = document.querySelector("#posted-photo")


submitMeme.addEventListener("submit", function(e){
    e.preventDefault();
    const postCaption = createMeme(submitCaption.value);
    submitCaption.value = "";
    memeResults.appendChild(postCaption)
    console.log("THIS IS ALSO PHOTOCHOICE", photoChoice)
    let image = new Image();
    image.src = photoChoice;
    image.classList.add("photo-style")
    memePhotoResults.appendChild(image)
    
}); 

function createMeme(text){
    const memeText = document.createElement('h2')
    memeText.innerText = text;
    return memeText;
}
