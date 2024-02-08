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
        Schema::create('entitytelephones', function (Blueprint $table) {
            
            $table->id();
            
            $table->foreignId('company_id')->nullable()->constrained('companies');
            $table->foreignId('entity_id')->nullable()->constrained('entities');
            $table->string('prefix')->nullable();
            $table->string('countryprefix')->nullable();
            $table->string('extensioncountry')->nullable();
            $table->string('telephonenumber')->nullable();
            $table->boolean('isprimary')->default(false);
            $table->foreignId('telephonetype')->nullable()->constrained('catalogitems');    
            $table->boolean('active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entitytelephones');
    }
};
