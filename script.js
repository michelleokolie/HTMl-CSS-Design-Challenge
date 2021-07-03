let getLouisText = () => {
    let message = document.createElement("div");
    let mesgText = document.createElement("p");
    let textValue = document.getElementById("louis-prompt");

    message.classList.add("your-message");



    if (!textValue.value == "") {
        message.appendChild(mesgText);

        mesgText.innerHTML = textValue.value;
        document.getElementById("louis-messages").appendChild(message).scrollIntoView();
        textValue.value = "";
    } else {
        alert("Please write a message");
    }

}
let getLeoText = () => {
    let message = document.createElement("div");
    let mesgText = document.createElement("p");
    let textValue = document.getElementById("leo-prompt");

    message.classList.add("your-message");



    if (!textValue.value == "") {
        message.appendChild(mesgText);

        mesgText.innerHTML = textValue.value;
        document.getElementById("leo-messages").appendChild(message).scrollIntoView();
        textValue.value = "";
    } else {
        alert("Please write a message");
    }

}
let getEmilyText = () => {
    let message = document.createElement("div");
    let mesgText = document.createElement("p");
    let textValue = document.getElementById("emily-prompt");

    message.classList.add("your-message");



    if (!textValue.value == "") {
        message.appendChild(mesgText);

        mesgText.innerHTML = textValue.value;
        document.getElementById("emily-messages").appendChild(message).scrollIntoView();
        textValue.value = "";
    } else {
        alert("Please write a message");
    }

}



let card = document.getElementsByClassName("pinned-card");
let currentUser = document.getElementById("user-name");

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        currentUser.innerHTML = document.getElementsByClassName("active")[0].querySelector("p.user-name").innerText;

        
    }
    )
}
let message = () => {
    alert("This feature is still under construction");
}

let showLeo = () => {
    document.getElementById("leo-messages").style.display = "flex";
    document.getElementById("leo-type").style.display = "flex";
    document.getElementById("louis-messages").style.display = "none";
    document.getElementById("louis-type").style.display = "none";
    document.getElementById("emily-messages").style.display = "none";
    document.getElementById("emily-type").style.display = "none";
}
let showLouis = () => {
    document.getElementById("leo-messages").style.display = "none";
    document.getElementById("louis-messages").style.display = "flex";
    document.getElementById("louis-type").style.display = "flex";
    document.getElementById("leo-type").style.display = "none";
    document.getElementById("emily-messages").style.display = "none";
    document.getElementById("emily-type").style.display = "none";
}
let showEmily = () => {
    document.getElementById("louis-messages").style.display = "none";
    document.getElementById("louis-type").style.display = "none";
    document.getElementById("leo-type").style.display = "none";
    document.getElementById("leo-messages").style.display = "none";
    document.getElementById("emily-messages").style.display = "flex";
    document.getElementById("emily-type").style.display = "flex";
}