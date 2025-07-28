<?php
session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');
  
require './connect.php';
$Formation=json_decode(file_get_contents("php://input"));
if( !$Formation ||
    !$Formation->titre ||
    !$Formation->description ||
    !$Formation->date ||
    !$Formation->lieu ||
    !$Formation->formateur ||
    !$Formation->duree ||
    !$Formation->prix ||
    !$Formation->image ||
    !$Formation->categorie ||
    !$Formation->places_dispo
    ){
        echo json_encode([
            "success" => false,
            "message" => "il ya un champ vide"
        ]);
    }

$titre=$Formation->titre;
$description=$Formation->description;
$date=$Formation->date;
$lieu=$Formation->lieu;
$formateur=$Formation->formateur;
$duree=$Formation->duree;
$prix=$Formation->prix;
$image=$Formation->image;
$categorie=$Formation->categorie;
$places_dispo=$Formation->places_dispo;


try{
    $req2=$con->prepare("INSERT INTO formations (titre, description, date, lieu, formateur, duree, prix, image, categorie, places_dispo)VALUES(?,?,?,?,?,?,?,?,?,?)");
    $req2->execute([$titre,$description,$date,$lieu,$formateur,$duree,$prix,$image,$categorie,$places_dispo]);
}catch(PDOException $e){
    echo json_encode([
        "success" => false,
        "message" => "Backend Failed : ". $e->getMessage()    
        ]);
    }
?>