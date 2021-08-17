var flag = true;

const temaEscuro = () => {

    let body = document.querySelector('body')
    let classCasa = document.getElementsByClassName('casa');
    let headerCasa = document.querySelectorAll('h4');
    let vendaCasa = document.querySelectorAll('h5');
    let headerNew = document.getElementById('casa-new');
    let headerTema = document.querySelector('header nav button')

    if (flag) {

        body.style.cssText = "background-color: #222222"
        for (let input of classCasa) {
            input.style.cssText = "background-color: #a1a1a1";
        }

        headerCasa.forEach(element => {
            element.style.cssText = 'color:black;'
        })

        vendaCasa.forEach(element => {
            element.style.cssText = 'color:#ffffff; background: #ffb647'
        })

        headerNew.style.cssText = 'background:#448556'

        headerTema.innerHTML = 'tema claro';

        flag = !flag

    } else {
        body.style.cssText = ""
        for (let input of classCasa) {
            input.style.cssText = "";
        }

        headerCasa.forEach(element => {
            element.style.cssText = ''
        })

        vendaCasa.forEach(element => {
            element.style.cssText = ''
        })

        headerNew.style.cssText = ''

        headerTema.innerHTML = 'tema escuro';

        flag = !flag
    }
}