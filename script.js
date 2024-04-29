const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e){
    e.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    if (!isNaN(campoA) && !isNaN(campoB)) {
        if (campoB > campoA) {
            mensagem.innerHTML = '<p>Formulário válido! B é maior que A.</p>';
            mensagem.style.color = 'green';
        } else {
            mensagem.innerHTML = '<p>Formulário inválido! B deve ser maior que A.</p>';
            mensagem.style.color = 'red';
        }
    } else {
        mensagem.innerHTML = '<p>Por favor, insira valores numéricos válidos em ambos os campos.</p>';
        mensagem.style.color = 'red';
    }
});
