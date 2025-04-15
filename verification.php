<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="phpcss.css" />
</head>

<body>
    <div id="result-container">
        <h1>Résultat de l'inscription</h1>
        <?php

        
        //Show the required Atributes
        function afficheChampObligatoire($label, $value): void
        {
            if ($value === '') {
                echo "<p><strong>$label :</strong> <span style='color:red;'>THIS NEEDS TO BE SET!!</span></p>";
            } else {
                echo "<p><strong>$label :</strong> $value</p>";
            }
        }


        //Show the optional Atributes
        function afficheChampOptionnel($label, $value): void
        {
            if ($value === '') {
                echo "<p><strong>$label :</strong> -Not set-</p>";
            } else {
                echo "<p><strong>$label :</strong> $value</p>";
            }
        }


        //lastname
        $nom = $_GET['nom'];
        afficheChampObligatoire('Nom', $nom);


        //firstname
        $prenom = $_GET['prenom'];
        afficheChampOptionnel('Prénom', $prenom);


        //email
        $email = $_GET['email'];
        afficheChampOptionnel('Email', $email);


        //age
        $age = $_GET['age'];
        if ($age === '') {
            echo "<p><strong>Âge :</strong> Not set</p>";
        } elseif (!is_numeric($age)) {
            echo "<p><strong>Âge :</strong> <span style='color:red;'>Invalid value</span></p>";
        } else {
            echo "<p><strong>Âge :</strong> " . (int)$age . "</p>";
        }


        //password
        $password = $_GET['motdepasse'];
        afficheChampObligatoire('Mot de passe', $password);


        //confirmation
        $confirmation = $_GET['confirmation'];
        afficheChampObligatoire('Confirmation', $confirmation);
        ?>
    </div>
</body>

</html>
