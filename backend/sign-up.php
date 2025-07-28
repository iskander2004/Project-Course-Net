<?php
session_start()

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

require './connect.php';
$Nuser = json_decode(file_get_contents("php://input"));

if( !$Nuser ||
    !$Nuser->nom_et_prenom ||
    !$Nuser->age || 
    !$Nuser->numéro_de_téléphone || 
    !$Nuser->email || 
    !$Nuser->password || 
    !$Nuser->confirm_password
    ){
        echo json_encode([
            "success" => false,
            "message" => "il ya un champ vide"
        ]);
    }

$nom_et_prenom=$Nuser->nom_et_prenom ;
$age=$Nuser->age;
$numero_de_telephone=$Nuser->numero_de_telephone;
$email =$Nuser->email; 
$password =$Nuser->password ;
$confirm_password=$Nuser->confirm_password;

try{
    $req1=$connect->prepare("select * from  user where email= ?");
    $req1->execute([$email]);

    if($req1->rowCount()>0){
        echo json_encode([
            "success" => false,
            "error_id" => 1,
            "message" => "⚠️Un compte existe déjà avec cette adresse e-mail. Veuillez vous connecter ou utiliser une autre adresse."
        ]);  
    }else{
        $req=$connect->prepare("INSERT INTO user (nom_et_prenom, age, numéro_de_téléphone, email, password, confirm_password) VALUES(?,?,?,?,?,?)");
        $req->execute([$nom_et_prenom,$age,$numero_de_telephone,$email,$password,$confirm_password]);
        
        if($req1->rowCount()>0){
            echo json_encode([
                "success" => true,
                "error_id" => -1,
                "message" => "✅ Votre compte a été créé avec succès. Bienvenue parmi nous !"
            ]);
        }else{
            echo json_encode([
                "success" => false,
                "error_id" => 2,
                "message" => "❌ Échec de l’opération. Veuillez réessayer."
            ]);
        }
    }
}catch(PDOException $e){
    echo json_encode([
        "success" => false,
        "message" => "Backend Failed : ". $e->getMessage()    
        ]);
    }
?>
