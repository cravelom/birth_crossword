function submitForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  
  if (firstName && lastName) {
    fetch('https://script.google.com/macros/s/15gMEdICMhbaj7M1g0HREFzL_HuJw3gSfG07U6HrgIvW8-17rYX3U28Hs/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName })
    }).then(() => {
      alert("Formulaire envoyé !");
      document.getElementById('nameForm').style.display = 'none';
    }).catch(error => {
      alert("Erreur lors de l'envoi !");
    });
  } else {
    alert("Merci de remplir tous les champs !");
  }
}

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
