<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RegisterEmail extends Mailable
{
    use Queueable, SerializesModels;

    private $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $qualquerNome)
    {
        //
        $this->user = $qualquerNome;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Register Email',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return RegisterEmail
     * 
     */

    public function build()
    {

        $this->subject('Assunto do Email');
        $this->from('reply@email.com');
        $this->replyTo('mateuscpg12345@gmail.com');


        return $this->view('Mail.registerMail', [
            'nome' => $this->user->name
        ])->attach('C:\Users\Carlos\Downloads\projetos\curso-laravel\mailer\public\planeta.jpg', [
            'as' => 'planeta-terra.jpg'
        ]);
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
