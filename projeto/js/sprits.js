function limpar() {
  titulo.value = '';
  descricao.value = '';
  select.value = '';
  categoria.value = '';
  video.value = '';
}

salvarDados = function () {
  var titulo = document.getElementById('titulo').value;
  var descricao = document.getElementById('descricao').value;
  var select = document.getElementById('select').value;
  var categoria = document.getElementById('categoria').value;
  var video = document.getElementById('video');

  localStorage.setItem('titulo', titulo);
  localStorage.setItem('descricao', descricao);
  localStorage.setItem('select', select);
  localStorage.setItem('categoria', categoria);
  localStorage.setItem('video', video);

  alert('Dados armazenados com sucesso!');
};
salvarDados;
