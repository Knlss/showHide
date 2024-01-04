const el = document.querySelector("#container")

function hide() {

    return el.classList.add("invisible")
}

function show() {

    return el.classList.remove("invisible")

}

function ocult() {


    if (el.classList.contains("invisible")) {
        show()
    }
    else {
        hide()
    }

}