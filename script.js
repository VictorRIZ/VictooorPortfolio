//alert("For a better experience, use 80% to resolution. / Para uma melhor experiência, utilize a resolução em 80%.");

window.addEventListener('scroll', OnScroll)

OnScroll()
//Function destinada a tudo relacionado ao scroll da página
function OnScroll(){
    showReturnToTopOnScroll()
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
#about-me,
#projetos .title,
#projetos .servicos,
#contact,`);