<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    echo "Testing";
?>

<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "zoumourouda";
$dbname = "farmconnect";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les données du formulaire
$idUser = $_POST['idUser'];
$age = $_POST['age'];
$ville = $_POST['ville'];
$email = $_POST['email'];
$passwordHash = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hasher le mot de passe
$profession = $_POST['profession'];

// Vérifier la profession et insérer les données dans les tables appropriées
switch ($profession) {
    case 'agriculteur':
        $sqlUser = "INSERT INTO Users (idUser, age, ville, email, motDePasseHash, profession) VALUES ('$idUser', $age, '$ville', '$email', '$passwordHash', '$profession')";
        $sqlAgriculteur = "INSERT INTO Agriculteur (idUser) VALUES ('$idUser')";
        break;
    case 'ingenieur':
        $specialite = $_POST['specialite'];
        $sqlUser = "INSERT INTO Users (idUser, age, ville, email, motDePasseHash, profession) VALUES ('$idUser', $age, '$ville', '$email', '$passwordHash', '$profession')";
        $sqlIngenieur = "INSERT INTO Ingenieur (idUser, specialite) VALUES ('$idUser', '$specialite')";
        break;
    case 'commerçant':
        $sqlUser = "INSERT INTO Users (idUser, age, ville, email, motDePasseHash, profession) VALUES ('$idUser', $age, '$ville', '$email', '$passwordHash', '$profession')";
        $sqlCommercant = "INSERT INTO Commercant (idUser) VALUES ('$idUser')";
        break;
    case 'consommateur':
        $justificatif = isset($_FILES['justificatif']) ? $_FILES['justificatif']['name'] : 'none';
        move_uploaded_file($_FILES['justificatif']['tmp_name'], 'uploads/' . $justificatif); // Déplacer le fichier justificatif vers un répertoire approprié
        $sqlUser = "INSERT INTO Users (idUser, age, ville, email, motDePasseHash, profession) VALUES ('$idUser', $age, '$ville', '$email', '$passwordHash', '$profession')";
        $sqlConsommateur = "INSERT INTO Consommateur (idUser, justificatif) VALUES ('$idUser', '$justificatif')";
        break;
    default:
        echo "Profession non reconnue";
}

// Exécuter les requêtes SQL
if ($conn->query($sqlUser) === TRUE) {
    echo "Utilisateur inscrit avec succès";
    if (isset($sqlAgriculteur)) {
        $conn->query($sqlAgriculteur);
    }
    if (isset($sqlIngenieur)) {
        $conn->query($sqlIngenieur);
    }
    if (isset($sqlCommercant)) {
        $conn->query($sqlCommercant);
    }
    if (isset($sqlConsommateur)) {
        $conn->query($sqlConsommateur);
    }
} else {
    echo "Erreur lors de l'inscription: " . $conn->error;
}

// Fermer la connexion à la base de données
$conn->close();
?>
