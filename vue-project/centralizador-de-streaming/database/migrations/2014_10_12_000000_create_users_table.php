<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email', 200)->unique();
            $table->string('password');
            $table->string('photo');
            $table->string('birth');
            $table->integer('id_cms_privileges');
            $table->integer('id_netflix')->nullable();
            $table->integer('id_hbo')->nullable();
            $table->integer('id_primevideo')->nullable();
            $table->integer('id_paramount')->nullable();
            $table->integer('id_starplus')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
