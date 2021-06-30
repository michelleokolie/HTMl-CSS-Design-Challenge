let getText = () => {
    let message = document.createElement("div");
    let mesgContainer = document.createElement("div");
    let mesgText = document.createElement("p");
    let textValue = document.getElementById("message-prompt");

    mesgContainer.classList.add("y-m-c");
    message.classList.add("your-message");



    if (!textValue.value == "") {
        message.appendChild(mesgText);
        mesgContainer.appendChild(message);

        mesgText.innerHTML = textValue.value;
        document.getElementById("user-messages").appendChild(mesgContainer).scrollIntoView();
        textValue.value = "";
    } else {
        alert("Please write a message");
    }

}

let cardContainer = document.getElementById("pinned-cards");
let card = cardContainer.getElementsByClassName("pinned-card");

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    }
    )
}
