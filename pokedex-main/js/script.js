// Seleciona elementos principais da página
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

// Seleciona elementos para exibir informações adicionais do Pokémon
const pokemonWeight = document.querySelector('.pokemon__weight');
const pokemonType = document.querySelector('.pokemon__type');
const pokemonMoves = document.querySelector('.pokemon__moves');

// Seleciona elementos do formulário e botões de navegação
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

// Inicializa a variável para armazenar o número do Pokémon atual
let searchPokemon = 1;

// Função para buscar dados do Pokémon na API
const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  // Verifica se a resposta da API foi bem-sucedida
  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

// Função para renderizar dados do Pokémon na página
const renderPokemon = async (pokemon) => {

  // Exibe mensagem de carregamento enquanto os dados são buscados
  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  // Busca dados do Pokémon usando a função fetchPokemon
  const data = await fetchPokemon(pokemon);

  // Se os dados foram encontrados, atualiza a página com as informações do Pokémon
  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;

    // Atualiza as informações adicionais do Pokémon
    pokemonWeight.innerHTML = data.weight / 10 + ' kg';  // Peso em kg
    pokemonType.innerHTML = data.types.map(type => type.type.name).join(', ');
    pokemonMoves.innerHTML = data.moves.slice(0, 4).map(move => move.move.name).join(', '); // Mostra até 4 ataques
  } else {
    // Se os dados não foram encontrados, exibe mensagem de erro
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found :c';
    pokemonNumber.innerHTML = '';

    // Limpa as informações adicionais do Pokémon
    pokemonWeight.innerHTML = '';
    pokemonType.innerHTML = '';
    pokemonMoves.innerHTML = '';
  }
}

// Adiciona evento de submit ao formulário para buscar Pokémon por nome ou número
form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

// Adiciona evento ao botão 'Prev' para buscar o Pokémon anterior
buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

// Adiciona evento ao botão 'Next' para buscar o próximo Pokémon
buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

// Renderiza o Pokémon inicial ao carregar a página
renderPokemon(searchPokemon);
