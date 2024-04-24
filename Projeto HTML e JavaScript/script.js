const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');


titulo.innerText = 'Título do Site';
link.innerText = 'Link para ProzEducação';
link.href = 'https://prozeducacao.com.br';


listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';


listaOrdenada.innerHTML = '<li><a href="https://example.com">Item 1</a></li><li><a href="https://example.com">Item 2</a></li><li><a href="https://example.com">Item 3</a></li>';
