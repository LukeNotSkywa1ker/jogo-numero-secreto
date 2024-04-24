function verifyValidGuess(chute) {
  const guessNum = +chute;

  if (chuteInvalido(guessNum)) {
    elementoChute.innerHTML += '<div>É pra falar um número seu imbecil</div>';
    return;
  }
  if (numMaiorMenorQueOPermitido(guessNum)) {
    elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor} sua anta</div>`;
    return;
  }

  if (guessNum === numeroSecreto) {
    document.body.innerHTML = `<h2>Acertô Mizeravi</h2>
  <h3>O número secreto era ${numeroSecreto}
  </h3>
  <button id='restart' class='btn-restart'>Jogar Novamente</button> `;
  } else if (guessNum > numeroSecreto) {
    elementoChute.innerHTML += `<div>
    O número secreto é menor<i class="fa-solid fa-arrow-down-long"></i>
  </div>`;
  } else {
    elementoChute.innerHTML += `<div>
    O número secreto é maior<i class="fa-solid fa-arrow-up-long"></i>
  </div>`;
  }
}

function chuteInvalido(guessNum) {
  return Number.isNaN(guessNum);
}

function numMaiorMenorQueOPermitido(guessNum) {
  return guessNum > maiorValor || guessNum < menorValor;
}

document.body.addEventListener('click', (e) => {
  if (e.target.id == 'restart') {
    window.location.reload();
  }
});
