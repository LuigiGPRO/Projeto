function letreiroLinear(id, duracao = 10, reverso = false) {
    const elem = document.getElementById(id);

    elem.style.animationDuration = duracao + "s";

    if (reverso) {
        elem.style.animationDirection = "reverse";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    letreiroLinear("letreiro", 30, false); 
});
