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
    $codeP = "P123"; // Code du nouveau produit
    $idVendeur = "agri001"; // ID du vendeur (agriculteur ou ingénieur)
    $type = "TypeA"; // Type du produit
    $date_p = date("Y-m-d"); // Date de publication du produit (aujourd'hui)
    $heure = date("H:i:s"); // Heure de publication du produit (actuelle)
    $categorie = "CatégorieA"; // Catégorie du produit
    $Qte = 10; // Quantité du produit
    $description = "Description du nouveau produit";
    
    // Requête SQL pour insérer le nouveau produit dans la table Produit
    $sql = "INSERT INTO Produit (codeP, idVendeur, type, date_p, heure, categorie, Qte, description)
            VALUES (:codeP, :idVendeur, :type, :date_p, :heure, :categorie, :Qte, :description)";
    
    // Préparation de la requête
    $stmt = $conn->prepare($sql);
    
    // Liaison des paramètres
    $stmt->bindParam(':codeP', $codeP);
    $stmt->bindParam(':idVendeur', $idVendeur);
    $stmt->bindParam(':type', $type);
    $stmt->bindParam(':date_p', $date_p);
    $stmt->bindParam(':heure', $heure);
    $stmt->bindParam(':categorie', $categorie);
    $stmt->bindParam(':Qte', $Qte);
    $stmt->bindParam(':description', $description);
    
    // Exécution de la requête
    $stmt->execute();
    
    echo "Nouveau produit ajouté avec succès !";
} catch(PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}

// Fermeture de la connexion
$conn = null;
?>
