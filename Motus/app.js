async function getWords() {
	const response = await fetch('mots.json');
	if (response.ok) {
	    return await response.json();
	}
	else {
	    alert("Il y eu une erreur");
	}
}
/* Fonction d'affichage des lettres */
function showLetter(words) {
    /*var rand = Math.floor(Math.random()*myArray.length);*/
    console.log(words);
    let reponse = document.getElementsByClassName('firstResult');
    const rand = Math.floor(Math.random()*words.length);
    reponse[0].innerHTML = `<p>Voici la première lettre : <span class="goodletter">${words[rand].mot.charAt(0)}<span></p>`;

    let i = 0;
    /* pour la fonction handleSubmit */
    

    document.querySelector('form').addEventListener('submit', handleSubmit);
    /* Fonction de base anonyme mais changé avec un nom pour pouvoir la stopper (fonction qui s'active lorsqu'on clique sur submit) */
    function handleSubmit(e) { 
        i++
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        let reponses = document.getElementsByClassName('result');
        let p = document.createElement("p");
        p.className = 'flexbox';
        reponses[0].appendChild(p);
        
        /* boucle for pour itérer sur chaque lettre */
        for (let y = 0; y < 6; y++) {
            /* console.log(y); */
            
            if(name.charAt(y) === words[rand].mot.charAt(y)) {
                
                p.innerHTML += `<div class="goodletter">${words[rand].mot.charAt(y)}</div>`;
            }
    
            else if(name.charAt(y) !== words[rand].mot.charAt(y)) {
                console.log(name)
                console.log(words[rand].mot) 

                if (name.charAt(y) === words[rand].mot.charAt(0) || name.charAt(y) === words[rand].mot.charAt(1) || name.charAt(y) === words[rand].mot.charAt(2) || name.charAt(y) === words[rand].mot.charAt(3) || name.charAt(y) === words[rand].mot.charAt(4) || name.charAt(y) === words[rand].mot.charAt(5)) {
                    p.innerHTML += `<div class="almostgoodletter">${name.charAt(y)}</div>`;
                }
                else {
                    p.innerHTML += `<div class="notgood">${name.charAt(y)}</div>`;
                }
            }
                
        }
        
        let risponse = document.getElementsByClassName('finalWord');
        
        if(name === words[rand].mot){
           
            

            alert(`Bravo bonne réponse !`);
            document.querySelector('form').removeEventListener('submit', handleSubmit);
            risponse[0].innerHTML = `<p>Félicitation ! Vous avez trouvé le mot : <span class="redbold">${words[rand].mot}</span> en <span class="redbold">${i}</span> essai(s)</p>`;
            
            
        }
        /*reponses[0].innerHTML += `<span>${words[rand].mot.charAt(0)}</span>`;*/
        if(i === 6) {
            alert(`Fin du jeu (les 6 essais sont écoulés), la réponse etait : ${words[rand].mot}`);
            document.querySelector('form').removeEventListener('submit', handleSubmit);
            risponse[0].innerHTML = `<p>La réponse etait : <span class="redbold">${words[rand].mot}</span></p>`;
            
        }
        
    }
    
}

function showError(error) {
	let response = document.getElementsByClassName('result');
	response[0].innerHTML = error;
}

getWords()
    .then(name => showLetter(name))
    .catch(err => showError(new Error(err)));

