/*Botão menu hamburguer*/

const btnHamburguer = document.getElementById('btn-hamburguer');
//Pegou o elemento pelo id(no caso o button btn-hamburguer)

function toggleMenu(event){ //Função que vai executar a ação do toggle
 if (event.type === 'touchstart') event.preventDefault();/*Ou seja,
 se o evento for "touch", colocamos para que não ative nada além
 do padrão(preventDefault), que nesse caso seria o "touch" */ 

const header = document.getElementById('header'); 
//Div de navegação(about)
  header.classList.toggle('active'); /*(Adicione caso tenha, remova caso nn tenha)
  Essa é a fuunção do toggle nesse caso*/
  const active = header.classList.contains('active'); /*Ou seja,
  caso for active é true, caso contrário, é false.*/ 
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) 
  event.currentTarget.setAttribute('area-label', 'Fechar Menu');
  /*Ou seja, assim que abrir o menu, vai ler a mensagem de fechar menu*/ 
  event.currentTarget.setAttribute('area-label', 'Abrir Menu');
}
function funcaoalert()
{
alert("Para uma melhor resolução do porfolio, utilize em 80% de resolução.")
}
