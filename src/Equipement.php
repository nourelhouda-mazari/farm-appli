<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "zoumourouda";
$dbname = "farmconnect";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Configuration pour générer des exceptions en cas d'erreur
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Déclaration des données du nouveau produit à ajouter
    $codeE = "ABC123"; // Code du nouvel équipement
    $prix = 100; // Prix du nouvel équipement
    $description = "Description du nouvel équipement";
    $idOwner = "proprietaire123"; // ID du propriétaire de l'équipement
    
    // Requête SQL pour insérer le nouvel équipement dans la table Equipement
    $sql = "INSERT INTO Equipement (codeE, prix, description, idOwner)
            VALUES (:codeE, :prix, :description, :idOwner)";
    
    // Préparation de la requête
    $stmt = $conn->prepare($sql);
    
    // Liaison des paramètres
    $stmt->bindParam(':codeE', $codeE);
    $stmt->bindParam(':prix', $prix);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':idOwner', $idOwner);
    
    // Exécution de la requête
    $stmt->execute();
    
    echo "Nouveau Equipement ajouté avec succès !";
} catch(PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}

// Fermeture de la connexion
$conn = null;
?>
