
const choix = document.querySelectorAll(".button_choix");
let joueur;
let ordinateur;
let pts_ordi = 0;
let pts_joueur = 0;
let resultat;
console.log(choix.length);

for (let i = 0 ; i < choix.length ; i++)
{  
    choix[i].addEventListener('click', function()
    {       
        joueur = choix[i].innerHTML;     
        ordinateur = choix[Math.floor(Math.random()*choix.length)].innerHTML;      
        resultat = play(joueur,ordinateur);             
        document.getElementById ("resultat").innerHTML = resultat ;            
        document.getElementById ("ordinateur").innerHTML = ` ${ordinateur} ! `; 
        document.getElementById ("img_ordi").innerHTML =`<img src = "images/${ordinateur}.png">`
        document.getElementById ("joueur").innerHTML = `${joueur} !`; 
        document.getElementById ("img_joueur").innerHTML =`<img src = "images/${joueur}.png">`     
        document.getElementById ("pts_joueur").innerHTML =`${pts_joueur } pts `;                    
        document.getElementById ("pts_ordi").innerHTML =`${pts_ordi } pts `;       
    } )
}       
                               
function play(joueur,ordinateur)
    { 
  
        if (
            (joueur == "Pierre" && ordinateur == "Ciseaux")||
            (joueur == "Pierre" && ordinateur == "Lezard")||
            (joueur == "Papier" && ordinateur == "Pierre")||
            (joueur == " papier" && ordinateur == "Lezard")||
            (joueur == "Ciseaux" && ordinateur == "Papier")||
            (joueur == "Ciseaux" && ordinateur == "Lezard")||
            (joueur == "Lezard" && ordinateur == "Puit")||
            (joueur == "Puit" && ordinateur == "Pierre")||
            (joueur == "Puit" && ordinateur == "Papier")||
            (joueur == "Puit" && ordinateur == "Ciseaux")
        )
    {
        resultat = `<img src="images/yhea.png"> "Bien joué !" <img src="images/arff.png">`;
        pts_joueur = pts_joueur +1 ;             
    }
    else if (joueur === ordinateur)
    {
       resultat = `<img src="images/oups.png">" Match nul !"<img src="images/oups.png">`;
    }
    else 
    {
        resultat = `<img src="images/arff.png">"Perdu ! <img src="images/yhea.png">`; 
        pts_ordi = pts_ordi +1   ;     
    }
    return resultat ;   

}                      





