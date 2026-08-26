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
if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = new FormData(form).get('name').trim();
    formNote.textContent = `Thanks${name ? `, ${name}` : ''}. We’ll be in touch soon.`;
    form.reset();
  });
}

const mealForm = document.querySelector('#meal-plan-form');
const mealResult = document.querySelector('#meal-result');
if (mealForm && mealResult) {
  mealForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(mealForm);
    const plans = {
      performance: 'Greek yogurt oats / chicken grain bowl / salmon greens',
      muscle: 'Protein oats / turkey rice bowl / cottage cheese fruit',
      energy: 'Egg breakfast / colorful lunch bowl / balanced dinner'
    };
    const style = data.get('mealStyle');
    const count = data.get('mealCount');
    mealResult.textContent = `${count} meals: ${plans[data.get('mealGoal')]} · ${style.replace('-', ' ')}`;
  });
}

const workoutForm = document.querySelector('#workout-plan-form');
const workoutResult = document.querySelector('#workout-result');
if (workoutForm && workoutResult) {
  workoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(workoutForm);
    const focus = {
      strength: 'full-body strength',
      conditioning: 'engine intervals',
      hybrid: 'strength + conditioning',
      return: 'foundation movement'
    };
    workoutResult.textContent = `${data.get('days')} days: ${focus[data.get('workoutGoal')]} · ${data.get('level').toLowerCase()}`;
  });
}
