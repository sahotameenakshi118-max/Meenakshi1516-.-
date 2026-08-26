const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.program-card');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
    cards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.type === filter;
      card.hidden = !visible;
    });
  });
});

const form = document.querySelector('.join-form');
const formNote = document.querySelector('.form-note');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name').trim();
  formNote.textContent = `Thanks${name ? `, ${name}` : ''}. We’ll be in touch soon.`;
  form.reset();
});
