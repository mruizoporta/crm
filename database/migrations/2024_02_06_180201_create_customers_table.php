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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();

            $table->foreignId('company_id')->nullable()->constrained('companies');
            $table->foreignId('natural_id')->nullable()->constrained('naturals');
            $table->foreignId('legal_id')->nullable()->constrained('legals');

            $table->foreignId('customertype_id')->nullable()->constrained('catalogitems'); 
            $table->foreignId('status_id')->nullable()->constrained('catalogitems');
            $table->foreignId('industry_id')->nullable()->constrained('catalogitems');   

            $table->string('title')->nullable();
            $table->string('department')->nullable();

            $table->boolean('active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
