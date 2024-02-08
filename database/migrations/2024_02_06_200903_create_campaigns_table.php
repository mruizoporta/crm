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
        Schema::create('campaigns', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->nullable()->constrained('companies');  
            $table->foreignId('parentcampaig_id')->nullable()->constrained('campaigns'); 
            $table->string('name')->nullable();
            $table->string('code')->nullable();
            $table->string('description')->nullable();
            $table->date('startedon')->nullable();
            $table->date('finishedon')->nullable(); 

            $table->decimal('budgetcost', 8, 2)->nullable();
            $table->decimal('actualcost', 8, 2)->nullable();
            $table->decimal('expectedRevenue', 8, 2)->nullable();
            $table->decimal('expectedResponse', 8, 2)->nullable();

            $table->integer('numsent')->nullable();
            $table->integer('numoportunities')->nullable();
            $table->integer('numsales')->nullable();
            $table->string('comment')->nullable();

            $table->boolean('active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campaigns');
    }
};
