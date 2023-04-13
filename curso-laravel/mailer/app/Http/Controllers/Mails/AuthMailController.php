<?php

namespace App\Http\Controllers\Mails;

use App\Http\Controllers\Controller;
use App\Jobs\SendAuthMail;
use App\Mail\RegisterEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AuthMailController extends Controller
{
    public function sendRegisterMail()
    {
        $user = new User();
        $user->name = 'Zete Correia' ;
        $user->email ='teste3@gmail.com';
        $user->password ='123';
        $user->save();
    
        SendAuthMail::dispatch($user);
    }
    
}
