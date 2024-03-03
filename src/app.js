document.addEventListener('DOMContentLoaded', function() {
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const pintas = ['♦', '♥', '♠', '♣'];
  const pintaColor = {
    '♦': 'red',
    '♥': 'red',
    '♠': 'black',
    '♣': 'black'
  };

  function generarCarta() {
    const valor = valores[Math.floor(Math.random() * valores.length)];
    const pinta = pintas[Math.floor(Math.random() * pintas.length)];
    const color = pintaColor[pinta];
    
    document.querySelector('.cardValue').textContent = valor;
    document.querySelectorAll('.icono').forEach(icon => {
      icon.textContent = pinta;
      icon.style.color = color;
    });
  }

  document.getElementById('generateButton').addEventListener('click', generarCarta);
  
  generarCarta();
});
