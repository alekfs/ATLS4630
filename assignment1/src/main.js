import './style.css';

// declaring variables
const box = document.getElementById('boxman');
const statusEl = document.getElementById('status');
const area = document.getElementById('playground');
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// moving boxman
function moveBoxman() {
  const maxLeft = area.clientWidth - box.offsetWidth - 10;
  const maxTop  = area.clientHeight - box.offsetHeight - 10;
  box.style.left = `${rand(10, Math.max(10, maxLeft))}px`;
  box.style.top  = `${rand(10, Math.max(10, maxTop))}px`;
}

// click boxman: jump +  boop
box.addEventListener('click', () => {
  moveBoxman();
  box.setAttribute('alt', 'Boxman jumped!');
  box.classList.add('boop');
  setTimeout(() => box.classList.remove('boop'), 180); // remove the boop after the transform finishes
});

// T toggles dark mode
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 't') {
    document.body.classList.toggle('dark');
    statusEl.textContent = document.body.classList.contains('dark')
      ? 'Dark mode ON. Press T to switch to light mode. Click the Boxman to move him.'
      : 'Press T to toggle dark mode. Click the Boxman to move him.';
  }
});
