const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");
const monster = document.getElementById("monster");

imgBox.addEventListener("dragstart", (e) => {
    //console.log("dragstart");
    e.target.className += " hold";
    monster.className += " inverted hold";
    setTimeout(() => {
        e.target.className = "hide";
    }, 0);
});

imgBox.addEventListener("dragend", (e) => {
    //console.log("dragend");
    e.target.className = "imgBox";
    monster.className = "monster";
});

for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    
    whiteBox.addEventListener("dragenter", (e) => {
    
    });
    
    whiteBox.addEventListener("dragleave", (e) => {
    
    });
    
    whiteBox.addEventListener("drop", (e) => {
        e.target.append(imgBox);
    });
}

monster.addEventListener("dragover", (e) => {
    e.preventDefault();
});

monster.addEventListener("dragenter", (e) => {
    console.log("drooling");
});

monster.addEventListener("dragleave", (e) => {
    console.log("crying");
});

monster.addEventListener("drop", (e) => {
    // e.target.append(imgBox);
    imgBox.style.display = "none";
});