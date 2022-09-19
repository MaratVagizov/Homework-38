let container = document.querySelector(".blocks")

for (let i = 0; i < 8; i++) {

    // tags creating

    let box = document.createElement("div")
    let box_1 = document.createElement("div")
    let img = document.createElement("img")
    let box_2 = document.createElement("div")
    let txt_1 = document.createElement("p")
    let txt_2 = document.createElement("p")
    let icon_box_tot = document.createElement("div")
    let icon_box_1 = document.createElement("div")
    let icon_box_2 = document.createElement("div")
    let icon_box_3 = document.createElement("div")
    let icon_1 = document.createElement("img")
    let icon_2 = document.createElement("img")
    let icon_3 = document.createElement("img")
    let icon_box_txt_1 = document.createElement("p")
    let icon_box_txt_2 = document.createElement("p")
    let icon_box_txt_3 = document.createElement("p")
    let button = document.createElement("button")

    // tags styling

    box.classList.add("box")

    box_1.classList.add("box_1")

    img.src = "./img/81fPKd-2AYL 1.svg"
    img.classList.add("img")

    box_2.classList.add("box_2")

    txt_1.classList.add("txt_1")
    txt_1.innerHTML = "MENS CLOTHING (120)"

    txt_2.classList.add("txt_2")
    txt_2.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

    icon_box_tot.classList.add("icon_box_tot")

    icon_box_1.classList.add("icon_box")
    icon_box_2.classList.add("icon_box")
    icon_box_3.classList.add("icon_box")

    icon_1.src = "./img/11.svg"
    icon_1.classList.add("icon_1")
    icon_box_txt_1.classList.add("icon_box_txt")
    icon_box_txt_1.innerHTML = "109"

    icon_2.src = "./img/22.svg"
    icon_2.classList.add("icon_2")
    icon_box_txt_2.classList.add("icon_box_txt")
    icon_box_txt_2.innerHTML = "3,9"

    icon_3.src = "./img/33.svg"
    icon_3.classList.add("icon_3")
    icon_box_txt_3.classList.add("icon_box_txt")
    icon_box_txt_3.innerHTML = "120"

    button.classList.add("button")
    button.innerHTML = "В избранное"

    // tags apending

    container.append(box)
    box.append(box_1, box_2)
    box_1.append(img)
    box_2.append(txt_1, txt_2, icon_box_tot, button)
    icon_box_tot.append(icon_box_1, icon_box_2, icon_box_3)
    icon_box_1.append(icon_1, icon_box_txt_1)
    icon_box_2.append(icon_2, icon_box_txt_2)
    icon_box_3.append(icon_3, icon_box_txt_3)
}
