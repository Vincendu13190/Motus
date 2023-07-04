<!DOCTYPE html>
<html lang="fr">
<html>
    <head>

        <meta charset="utf-8">

        <title>Motus</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="style.css">

        <!-- Les trois lignes ci‑dessous sont un correctif pour que la sémantique
          HTML5 fonctionne correctement avec les anciennes versions de
          Internet Explorer-->
        <!--[if lt IE 9]>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
        <![endif]-->
        <script type="module" src="./app.js"></script>
    </head>

    <body>
        <!-- Voici notre en‑tête principale utilisée dans toutes les pages
            de notre site web -->
        <header>
            <img src="./images/motustitle.png" alt="Image Titre Motus">
        </header>

            
        <!-- Ici nous mettons le contenu de la page -->
        <main>
        <!-- Un formulaire de recherche est une autre façon de naviguer de
            façon non‑linéaire dans un site. -->
            <p class="introduction">Bienvenue dans le jeu du motus ! Dans ce jeu, vous devez trouver le mot en un maximum de 6 essais !</p>
            <form>
                <input type="text" id="name" name="name" required minlength="6" maxlength="6" size="15" placeholder="Entrez un mot à 6 lettres">
                <input type="submit" id="submit" value="Envoyer">
            </form>
            <div class="firstResult">

            </div>
            <div class="result">

            </div>
            <div class="finalWord">

            </div>
            <details>
                <summary class="spoiler">Des indices vous seront donnés...</summary><p class="intheSpoiler">La couleur jaune (par exemple <span class="almostgoodletter">A</span>), vous indiquera que la lettre existe bel et bien dans le mot mais qu'elle n'est pas au bon emplacement & la couleur rouge (exemple : <span class="goodletter">A</span>) vous indiquera que la lettre est correspondante et au bon emplacement.</p>
                <p class="warning"><span class="redwarning">Mais Attention !</span> Marquer plusieurs fois la même lettre vous indiquera l'emplacement de la bonne lettre en rouge et affichera la lettre en jaune sur les autres emplacement qui ne sont pas correspondants</p>
            </details>
        </main>

        
        <!-- Et voici notre pied de page utilisé sur toutes les pages du site -->
        <footer>
            <p>©Copyright 2050 par personne. Tous droits reversés. #Bien_protégé</p>
        </footer>
        <?php ?>
    </body>
</html>