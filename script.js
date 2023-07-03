//alert("For a better experience, use 80% to resolution. / Para uma melhor experiência, utilize a resolução em 80%.");

window.addEventListener('scroll', OnScroll)

OnScroll()
//Function destinada a tudo relacionado ao scroll da página
function OnScroll(){
    showNavOnScroll()
    showReturnToTopOnScroll()
}


function showNavOnScroll(){
    var navigation = document.getElementById("navigation");
    if (scrollY > 30) {//Se for maior que 0, ative.
        navigation.classList.add('scroll')//Adicionar classe via JS
        //Lembrando que já estilizei essa classe no CSS
        } else { //senão, remova.
            navigation.classList.remove('scroll')
        }
}

function showReturnToTopOnScroll(){
    var returnToTop = document.getElementById("returnToTop");
    if (scrollY > 400) {
        returnToTop.classList.add('show')
        } else { 
            returnToTop.classList.remove('show')
        }
}

//Smooth

ScrollReveal({
    origin: 'top',
    distance: '3rem',
    duration: 700,
}).reveal(`#navigation,
#apresentacao,
#about,
#formacao .formacao-detalhes,
#projetos .descricao-projetos,
#jobs .jobs-detalhes,`);