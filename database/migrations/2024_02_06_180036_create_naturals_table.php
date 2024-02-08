<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('naturals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->nullable()->constrained('companies');
            $table->foreignId('entity_id')->nullable()->constrained('entities');
            $table->foreignId('gender_id')->nullable()->constrained('catalogitems'); 
            $table->foreignId('civilstate_id')->nullable()->constrained('catalogitems');
            $table->foreignId('ocupation_id')->nullable()->constrained('catalogitems');   
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('naturals');
    }
};
