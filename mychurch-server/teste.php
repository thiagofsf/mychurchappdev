<?php
   
// Importar configurações de banco de dados.
include 'DBConfig.php';
// Importar configurações de banco de dados.
include 'classes/AppUser.php';
 
// Conectar.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DataBaseName);
   
$email = 'thiagofsf@gmail.com';
$senha = '*thiago2711';

echo'email:'.$email.'-senha:'.$senha.'.';

//Montar Query para verificar os dados.
$sql = "SELECT * FROM cadastroapp WHERE email = 'thiagofsf@gmail.com' AND senha = '*thiago2711'";
//$Sql_Query = "SELECT * FROM cadastroapp WHERE email = '$email' AND senha = '$senha'";



// Executar Query.
$qr = mysqli_query($con,$sql);

//fetch_array

$row_cnt =  $qr->num_rows;

//Caso o usuario exista
if($row_cnt == 0){

    // Criar mensagem Invalida.
    $InvalidMSG = 'Invalido.. Dados:'.$email."-".$senha."-" ;
 
    // Converter mensagem em JSON.
    $InvalidMSGJSon = json_encode($InvalidMSG);
 
    // Responder mensagem JSON.
    echo $InvalidMSG ;

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