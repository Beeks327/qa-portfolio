
// Dark mode toggle
const btn = document.getElementById('toggleTheme');
btn.onclick = () => document.body.classList.toggle('dark');

// Accordion
const acc = document.getElementsByClassName('accordion-btn');
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
}
