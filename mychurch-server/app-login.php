<?php
 
include 'classes/AppUser.php';

// Importar configurações de banco de dados.
include 'DBConfig.php';
 
// Conectar.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DataBaseName);
 
// Recuperar o JSON e colocar na variavel $json.
$json = file_get_contents('php://input');
 
// Decodificar o JSON recebido em uma variável $obj.
$obj = json_decode($json,true);
 
// Obter o Email do array JSON $obj e guardar em $email.
$email = $obj['useremail'];
 
// Obter senha do array JSON $obj e guardar em $senha.
$senha = $obj['usersenha'];

//Montar Query para verificar os dados.
$sql = "Select * FROM cadastroapp WHERE email = '$email' AND senha = '$senha'";
//$Sql_Query = "SELECT * FROM cadastroapp WHERE email = '$email' AND senha = '$senha'";

// Executar Query.
$qr = mysqli_query($con,$sql);

$row_cnt =  $qr->num_rows;

//Caso o usuario exista
if($row_cnt == 0){

    // Criar mensagem Invalida.
    $InvalidMSG = 'Invalido.. Dados:'.$email."-".$senha."-" ;
 
    // Converter mensagem em JSON.
    $InvalidMSGJSon = json_encode($InvalidMSG);
 
    // Responder mensagem JSON.
    echo $InvalidMSGJSon ;

}
 
//Caso não exista
else{
    
    // Criar mensagem de sucesso
    $SuccessLoginMsg = 'sucesso';

    //Obter nome de usuário
    $dados = $qr->fetch_array();
    $nome = $dados['nome'];
    
    // Criar objeto resposta e setar valores
    $res = New AppUser($SuccessLoginMsg, $email, $nome);
    
    // Codifica o JSON
    $resJSON = json_encode($res);
    
    // Responder mensagem JSON.
    echo $resJSON ; 

}

//fechar conexão com o banco
mysqli_close($con);
?>