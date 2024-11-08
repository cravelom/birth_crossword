function checkAnswers() {
  const cells = document.querySelectorAll('.input-cell');
  let allCorrect = true;

  cells.forEach(cell => {
    const input = cell.querySelector('input');
    if (input.value.toUpperCase() === cell.dataset.answer) {
      input.style.color = 'green';
    } else {
      input.style.color = 'red';
      allCorrect = false;
    }
  });

  const result = document.getElementById('result');
  if (allCorrect) {
    result.textContent = "Bravo ! Vous avez trouvé tous les mots !";
  } else {
    result.textContent = "Il y a encore des erreurs. Essayez encore !";
  }
}
