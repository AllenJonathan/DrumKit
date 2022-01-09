var numberOfDrums = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonHTML = this.innerHTML;
        play_sound(buttonHTML);
        makeAnimation(buttonHTML)
    })
}

document.addEventListener("keypress", function() {
    play_sound(event.key);
    makeAnimation(event.key);
})

function play_sound(key) {
        switch (key) {
            case "w":
                var audio = new Audio("sounds\\tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds\\kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds\\snare.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds\\tom-2.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds\\tom-3.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds\\tom-4.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds\\crash.mp3");
                audio.play();
                break;
            default: console.log(buttonHTML)
        }
    };

function makeAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);

}
