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
        Schema::create('entityaddresses', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('company_id')->nullable()->constrained('companies');
            $table->foreignId('entity_id')->nullable()->constrained('entities');
            $table->foreignId('city_id')->nullable()->constrained('cities');          
            $table->string('address')->nullable();
            $table->string('postalcode')->nullable();
            $table->boolean('isprimary')->default(false);
            $table->foreignId('addresstype')->nullable()->constrained('catalogitems');          
            $table->boolean('active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entityaddresses');
    }
};
