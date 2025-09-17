import './style.css';

async function getPokemon() {
  const randomId = Math.floor(Math.random() * 151) + 1; // for first gen pokemon
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await response.json();

  // update card content
  document.getElementById('pokemon-name').textContent =
    data.name.charAt(0).toUpperCase() + data.name.slice(1);

  document.getElementById('pokemon-img').src = data.sprites.front_default;

  const typesDiv = document.getElementById('pokemon-types');
  typesDiv.innerHTML = "";
  data.types.forEach(t => {
    const span = document.createElement('span');
    span.textContent = t.type.name.toUpperCase();
    span.className = "type";
    typesDiv.appendChild(span);
  });

  // fetch species data to get pokemon color
  const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`);
  const speciesData = await speciesResponse.json();
  const pokeColor = speciesData.color.name;

  // map pokemon color to a gradient
  const colorMap = {
    red: ['#ff7b7b', '#ff3b3b'],
    blue: ['#7bb7ff', '#3b7bff'],
    yellow: ['#ffe97b', '#ffcc3b'],
    green: ['#7bff9b', '#3bff6e'],
    purple: ['#c77bff', '#9b3bff'],
    pink: ['#ffb7d5', '#ff6ea9'],
    brown: ['#d2a679', '#8c5e2a'],
    gray: ['#c0c0c0', '#808080'],
    black: ['#555', '#222'],
    white: ['#f2f2f2', '#d9d9d9']
  };

  // fallback
  const gradient = colorMap[pokeColor] || ['#ffde59', '#ff914d'];
  document.body.style.background = `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`;
}

document.getElementById('new-pokemon').addEventListener('click', getPokemon);

getPokemon();
