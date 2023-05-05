<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientMancomunadaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_mancomunada', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_titular', 50)->nullable()->comment('nombre Cliente');
            $table->integer('tipo_doc')->nullable()->comment('nombre Cliente');
            $table->string('doc_titular', 50)->nullable()->comment('doc titular Cliente');
            $table->integer('id_client')->comment('id Cliente');
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
        Schema::dropIfExists('client_mancomunada');
    }
}
