// let ville = 'Tokyo'
// const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
let btn = document.querySelector('#changer');
villeChoisie = "Hoi an"
recevoirTemperature(villeChoisie)

btn.addEventListener('click', () => {

    villeChoisie = prompt("Indiquer un nom de ville :");
    recevoirTemperature(villeChoisie)
    
})

function recevoirTemperature(villeChoisie){

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + villeChoisie + '&appid=f286809a1145c10fe573a1c9642bef0f&units=metric';   
    let requete = new XMLHttpRequest();
    requete.open('GET',url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
                    if(requete.status === 200){
                        let reponse = requete.response;                        
                        let villeChoisie = reponse.name; 
                        let temp = reponse.main.temp;
                        document.querySelector('#temperature_label').textContent = temp;
                        document.querySelector('#ville').textContent = villeChoisie;
                    } else {
                    alert('Un probleme est intervenu, merci de revenir plus tard');
                    }
        }        
    };
}    


    





     




