let mainContainer = document.querySelector(".container");
let input = document.getElementById("input");
let btn = document.getElementById("add-task");
let headerSpan = document.getElementById("tasks-number")

btn.onclick = function () {
    if (input.value === "") {
        // alert("Please Write Something :)");
        input.style.borderColor = "red";
        
        input.onfocus = _ => {
            input.style.borderColor = "#830AD6";
        }
    } else {
        let div = document.createElement("div");
        let inputCheckBox = document.createElement("input");
        let span = document.createElement("span");
        let finishBtn = document.createElement("button");
        let removeBtn = document.createElement("button");

        inputCheckBox.setAttribute('type', 'checkbox');
        div.setAttribute('class', 'task')

        div.appendChild(inputCheckBox);
        div.appendChild(span);
        div.appendChild(finishBtn);
        div.appendChild(removeBtn);

        headerSpan.innerHTML++;

        finishBtn.innerHTML = "Finish";
        removeBtn.innerHTML = "Remove";
        span.innerHTML = input.value;
        mainContainer.appendChild(div);

        input.value = "";

        finishBtn.onclick = _ => {
            inputCheckBox.classList.add("checked");
            if (inputCheckBox.className == "checked") {
                inputCheckBox.classList.remove("checked");
            }
        }
        removeBtn.onclick = (e) => {
            e.target.parentElement.remove();
            headerSpan.innerHTML--;
        }
    }
}

// let icon = document.querySelector("#note-icon");
// console.log(icon);

// icon.onclick = function () {
//     input.focus;
// }