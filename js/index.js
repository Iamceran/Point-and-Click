document.getElementById("mainTitle").innerText = "Point and Click adventure";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");

const sec = 1000;

let tempTimeOut;

//Main character
const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

//Counter character
const counterSpeech = document.getElementById("counterSpeech")
const counterPortrait = document.getElementById("counterCharacter")

gameWindow.onclick = function(e){
    if (mainCharacterSpeech.style.opacity == 0){
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; // x position within the element.
        var y = e.clientY - rect.top;  // y position within the element.

        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);
        switch(e.target.id){
            case "door":
                showMessage(mainCharacterSpeech, characterAudio, "Here's a door!");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
    
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
    
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "The door cracks *seems like this door is pretty old*");
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 4 * sec);
    
                break;
            case "cave1":
                showMessage(mainCharacterSpeech, characterAudio, "Wow, such a dark cave!");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
    
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
    
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Brrr *it's very cold in the cave*");
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 4 * sec);
    
                break;
            case "cave2":
                showMessage(mainCharacterSpeech, characterAudio, "Wow, another dark cave!");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
        
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
        
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Brrr *it's very cold in the cave*");
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 4 * sec);
        
                break;
            default:
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
                break;
        }
    }
}

function showMessage(targetBubble, targetAudio, message){
    targetAudio.currentTime = 0;
    targetAudio.play();
    targetBubble.innerHTML = message;
    targetBubble.style.opacity = 1;
    setTimeout(hideMessage, 4 * sec, targetBubble, targetAudio);
}

function hideMessage(targetBubble, targetAudio){
    targetAudio.pause();
    targetBubble.innerHTML = "...";
    targetBubble.style.opacity = 0;
}

const counterCharacter = document.getElementById("counterCharacter");

//Audio
const characterAudio = document.getElementById("characterAudio");
const counterAudio = document.getElementById("counterAudio");