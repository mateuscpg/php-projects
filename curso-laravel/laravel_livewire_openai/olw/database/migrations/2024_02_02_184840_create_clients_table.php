<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('clientes')){
            Schema::create('clients', function (Blueprint $table) {
                $table->id();
                $table->foreignId('address_id')->constrained();
                $table->foreignId('user_id')->constrained();
                $table->timestamps();
                $table->softDeletes();
            });            
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
