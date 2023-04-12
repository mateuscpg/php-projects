<?php

namespace App\Http\Controllers\Mails;

use App\Http\Controllers\Controller;
use App\Mail\RegisterEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AuthMailController extends Controller
{
    public function sendRegisterMail()
    {
        $user = new User();
        $user->name = 'Mateus Correia 2';

        $registerEmail = new RegisterEmail($user);

        //        return $registerEmail;
        Mail::to('mateuscpg12345@gmail.com')
            ->cc('email@gmail.com')
            ->bcc('email2@gmail.com')
            ->send($registerEmail);
    }
    
}
