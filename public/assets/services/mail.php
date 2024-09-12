<?php
    if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['message'])) {
        $_POST['name'] = htmlspecialchars($_POST['name']);
        $_POST['phone'] = htmlspecialchars($_POST['phone']);
        $_POST['message'] = htmlspecialchars($_POST['message']);

        $message = "
        <html><body>
            <font size='4'>Nom et prénom: <b>{$_POST['name']}</b></font><br />
            <font size='4'>Numéro de téléphone: <b>{$_POST['phone']}</b></font><br />
            <font size='4'>Message: <b>{$_POST['message']}</b></font>
        </html></body>
        ";

        mail('coeur.de.pomeranien@gmail.com', 'Il y a un courrier pour vous! Cœur de Poméranien Bigouden', $message,  "From: coeur.de.pomeranien@gmail.com\r\n"
        ."Content-type: text/html; charset=utf-8\r\n"
        ."X-Mailer: PHP mail script");
    }
?>