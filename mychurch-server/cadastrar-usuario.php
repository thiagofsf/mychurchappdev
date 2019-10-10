<?php

    //Importar arquivo de configuração
    include 'DBConfig.php';

    //Criar uma conexão
    $con = mysqli_connect($HostName, $HostUser, $HostPass, $DataBaseName);

    // Transformar um JSON recebido em variável $json.
    $json = file_get_contents('php://input');
 
    // decodificando o JSON recebido e guardando em uma variavel $obj .
    $obj = json_decode($json,true);
 
    // recuperar nome do array JSON $obj e guardar em $nome .
    $nome = $obj['nome'];
    
    // Recuperar o email do array JSON $obj e guardar em $email.
    $email = $obj['email'];
 
    // Recuperar a senha do array JSON $obj e guardar em $senha.
    $senha = $obj['senha'];
    
    // Verificar se o novo cadastrado já é membro
    $membro = 0; //depois sera implementado

    // Nivel de privilegio 0
    $privilegio = 0; //depois sera implementado

    // Creating SQL query and insert the record into MySQL database table.
    
    $Sql_Query = "INSERT INTO cadastroapp (id, nome, email, senha, tipo, privilegio) VALUES (NULL, '$nome','$email','$senha', '$membro', '$privilegio')";
    
 
    if(mysqli_query($con,$Sql_Query)){
 
        // If the record inserted successfully then show the message.
        $MSG = 'Cadastro Realizado!' ;
    
        // Converting the message into JSON format.
        $json = json_encode($MSG);
    
        // Echo the message.
        echo $json ;
 
    }
    else{
 
         // If the record inserted successfully then show the message.
         $MSG = mysqli_error($con) ;
    
         // Converting the message into JSON format.
         $json = json_encode($MSG);
     
         // Echo the message.
         echo $json ;
 
    }

    mysqli_close($con);

?>