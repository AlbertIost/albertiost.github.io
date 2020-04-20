<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone_number'];
$feedback = $_POST['feedback'];
$age = $_POST['age'];
$remark = $_POST['remark'];
if($remark == ''){
    $remark = 'Комментарий отсутствует';
}

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'albertiost@mail.ru'; // Логин на почте
    $mail->Password   = 'marina02'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('albertiost@mail.ru', 'Celebrity'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('albertiost@mail.ru');

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Заголовок письма';
        $mail->Body    = 'Заявка от: ' . $name . '.<br>Номер телефона: ' . $phone . '.<br>Способ связи: ' . $feedback . '.<br>Ее возраст: ' . $age . '.<br>Комментарий: ' . $remark;


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}