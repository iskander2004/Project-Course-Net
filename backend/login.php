<?php 

session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

require './connect.php';

// php://input --> hathey el lien li bch tji alih el data ba3ed ma tba3thet fil php file
// file_get_contents() --> takhu el data li f iwosset el json 
// json_decode() --> decode el jsoon trodu object tnajem tista3mlou fil php
$user = json_decode(file_get_contents("php://input"));

// bhc nthabtou faragh o la ? les champs li jawna min typescript : 
if ( !$user || !$user->email || !$user->password ){
    // bch nab3thu json fih el error message et false, fil angular bch yakhdhu o chouf chfama o ma fammech
    echo json_encode([
        "success" => false,
        "message" => "Email and Pasword are empty"
    ]);
}

//kdhina les champ li hachtna behom
$email = $user->email;
$password = $user->password;

try{
    $sql = "SELECT * FROM user WHERE email = ?";
    $stmt = $con->prepare($sql);
    $stmt->execute([$email]);
    // el resultat bte3 el select dima table mysql donc nhibu nakhdhu el table hathika donc lazem nbadlouha tableau php kima amlna louta :
    $userInfo = $stmt->fetch(PDO::FETCH_ASSOC); 

    // $userInfo tableau contenant la resultat du select
    // $userInfo['password'] --> colone li 2issmeha password el valeur 2Ili fi wossteha
    if ($userInfo && $password == $userInfo['password']){
        $_SESSION['id'] = $userInfo['id'];
        echo json_encode([
            'success' => true,
            'message' => "user connected Succeffuly",
            'user' => [
                'user_id' => $userInfo['id'],
                'user_name' => $userInfo['nom_et_prenom']
            ]
        ]);
    }else{
        echo json_encode([
            "success" => false,
            "message" => "Email or Pasword is Incorrect !"
        ]);
    }
}catch (PDOException $e){
    echo json_encode([
        "success" => false,
        "message" => "Backend Failed : ". $e->getMessage()
    ]);
}
?>