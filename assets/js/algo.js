("====== EXO n°1 ======<br><br>");
("Prendre une variables en php (la déclaration d'une variable se fait avec un $ en php), affecter une valeur à cette variable et l'afficher <br>");

var somme = 1
console.log(somme);

("<br><br><br>====== EXO n°2 ======<br><br>");
("Prendre deux variables en php, affecter une valeur à chaque variable, afficher le résultat de l'addition, de la soustraction, et de la multiplication de ces deux variables <br>");
var x = 30
    var y = 20
    var result = x + y
    var result1 = x - y
    var result2 = x * y
    console.log(result);
    console.log(result1);
    console.log(result2);
("<br><br><br>====== EXO n°3 ======<br><br>");
("Prendre une variable en php et affecter une chaine de caracètere à cette variable et l'afficher <br>");
var Law = "R-Room : Silent !";
console.log(law);
("<br><br><br>====== EXO n°4 ======<br><br>");
("Afficher à l'aide des deux variables déjà défini le texte contenu dans les variables à l'aide d'une concaténation (un espace est souhaitée entre les deux variables) <br>");

var part1 = "coucou"
    var part2 = "petite perruche"
    var part3 = (part1 + " " + part2)
    console.log(part3);
("<br><br><br>====== EXO n°5 ======<br><br>");
("Permutter le contenu de la variable a et de la variable b <br>");
$a = 20 ;
$b = 30 ;

var var1 = 04
    var var2 = 13
    var var3 = var1
    var var1 = var2
    var var2 = var3
    console.log(var1);
    console.log(var2);
("<br><br><br>====== EXO n°6 ======<br><br>");
("A partir d'un algorithme, définir dans tout les cas possibles quels chiffre est le plus grand (vous pouvez changer les valeurs des variables a et b pour tester toutes les possiblités) <br>");
$a = 50 ;
$b = 30 ;

var var61 = 40
    var var62 = 15
    var grand = " A est plus grand que B"
    var petit = "A est plus petit que B"
    var egal = "A est egale a B"
    function clone(){
        if(var61>var62){
            console.log(grand);
        }
        else if(var62>var61){
            console.log(petit);
        }
        else{
            console.log(egal);  
        } 
    }
("<br><br><br>====== EXO n°7 ======<br><br>");
("faire une fonction qui prend en parametres deux variables ( a et b par exemple ) et qui définis quel chiffre est le plus grand <br>");
var g = 20 ;
var l = 30 ;
function grand(g,l){
if (g>l){
    console.log("g est le plus grand")
} 
else if (l>g){
    console.log("l est le plus grand")
}
else{
    console.log("g et l sont egal")
}
}

grandeur(g,l)

("<br><br><br>====== EXO n°8 ======<br><br>");
("afficher un nombre aléatoire à partir de la fonction rand() <br>");
/* Code à ajouter ci-dessous */

    console.log(math.random(10,90));
("<br><br><br>====== EXO n°9 ======<br><br>");
("afficher 10 nombre aléatoire à partir de la fonction rand() en utilisant une boucle <br>");
/* Code à ajouter ci-dessous */
for(i=0; i<=10; i++){
    console.log(math.floor(Math.random(+1)*100));
}




("<br><br><br>====== EXO n°10 ======<br><br>");
("afficher des nombres aléatoires compris entre 1 et 100 et s'arreter quand le dernier chiffre est >90 <br>");
/* Code à ajouter ci-dessous */
var antoine = 0;

while (antoine <90){
    console.log(antoine = math.floor(Math.random(+1)*100));
}
    
    
    
    
    
    
    
    
