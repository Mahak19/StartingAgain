// document.querySelector(".sp").addEventListener("click", function() {
//     window.open("https://example.com/spiritual", "_blank");
// })

document.addEventListener("click", function (event) {
    const links = {
        sp: "https://example.com/spiritual",
        mot: "https://example.com/motivational",
        edu: "https://example.com/educational",
        ent: "https://example.com/entertainment",
        hum: "https://example.com/humor",
        bio: "https://example.com/biography",
        his: "https://example.com/history",
        sci: "https://example.com/science",
        tec: "https://example.com/technological",
        art: "https://example.com/art",
        fic: "https://example.com/fictional",
        oth: "https://example.com/other"
    }

    const button = event.target.closest(".btn");
    if (!button) return;

    for (let key in links) {
        if (button.classList.contains(key)) {
            window.open(links[key], "_blank");
            break;
        }
    }
})
