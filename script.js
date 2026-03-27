// Dark Mode Toggle
document.getElementById("toggleTheme").onclick = () => {
    document.body.classList.toggle("dark");
};

// Accordion for Test Cases
const acc = document.getElementsByClassName("accordion-btn");
for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = () => {
        const panel = acc[i].nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    };
}
