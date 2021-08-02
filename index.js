const buttonList = document.querySelectorAll(".drum");
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        try {
            handleClick(this.innerHTML)
            addAnimation(this.innerHTML)
        } catch (e) {

        }
    })
}
document.addEventListener("keydown", function (event) {
    try {
        handleClick(event.key)
        addAnimation(event.key)
    } catch (e) {

    }
})

function addAnimation(key) {
    document.querySelector("." + key).classList.add("pressed")

    setTimeout(function () {
        cancelAnimation(key)
    }, 300)
}

function cancelAnimation(key) {
    document.querySelector("." + key).classList.remove("pressed")
}

function handleClick(drumType) {
    let audio;
    switch (drumType) {
        case "w" :
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a" :
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s" :
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d" :
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j" :
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k" :
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l" :
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
    }
}

