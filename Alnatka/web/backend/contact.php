<?php
require '../vendor/autoload.php'; // Ověřte, že tato cesta je správná

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$name = isset($data['name']) ? $data['name'] : '';
$email = isset($data['email']) ? $data['email'] : '';
$message = isset($data['message']) ? $data['message'] : '';

// Kontrola, zda jsou vyplněny povinné údaje
if (empty($name) || empty($email)) {
    echo json_encode(['message' => 'Jméno a email jsou povinné.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Nastavení serveru
    $mail->SMTPDebug = 0; // Změněno na 0, aby nedocházelo k rušení výstupu
    $mail->isSMTP();
    $mail->Host       = 'smtp.seznam.cz';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'a.smutnik@seznam.cz';
    $mail->Password   = 'SamuelGTP51601'; // Použijte specifické heslo pro aplikaci, pokud máte 2FA
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Příjemci
    $mail->setFrom('a.smutnik@seznam.cz', $name);
    $mail->addAddress('a.smutnik@seznam.cz', 'Ales Smutnik');

    // Obsah emailu
    $mail->isHTML(true);
    $mail->Subject = 'Nová zpráva z kontaktního formuláře';
    $mail->Body    = "Jméno: $name<br>Email: $email<br><br>Zpráva:<br>$message";

    $mail->send();
    echo json_encode(['message' => 'Zpráva byla úspěšně odeslána.']);
} catch (Exception $e) {
    echo json_encode(['message' => "Odeslání zprávy selhalo. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
