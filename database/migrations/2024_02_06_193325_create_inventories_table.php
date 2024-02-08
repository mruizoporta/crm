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
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('company_id')->nullable()->constrained('companies');  
            $table->foreignId('inventorycategory_id')->nullable()->constrained('inventorycategories'); 
            $table->string('name')->nullable();
            $table->date('introducedon')->nullable();
            $table->date('discontinuedon')->nullable();

            $table->string('shortdescription')->nullable();
            $table->string('longdescription')->nullable();

            $table->decimal('regularprice', 8, 2)->nullable();
            $table->decimal('specialprice', 8, 2)->nullable();

            $table->boolean('active')->default(true);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventories');
    }
};
