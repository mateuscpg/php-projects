<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MensagemTesteMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // $mensagem ='Você está recebendo este e-mail porque recebemos uma solicitação de redefinição de senha para sua conta.';
        // $prazo = 'Esse link para atualizar a senha expira em 60 minutos';

        return $this->markdown('emails.mensagem-teste');
    }
}
