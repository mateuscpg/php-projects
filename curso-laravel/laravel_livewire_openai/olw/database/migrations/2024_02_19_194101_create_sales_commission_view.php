<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateSalesCommissionView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $viewExists = DB::select("SHOW TABLES LIKE 'sales_commission_view'");
        
        if (empty($viewExists)) {
            $query = DB::table('sales as s')
                ->join('sellers as sl', 'sl.id', '=', 's.seller_id')
                ->join('clients as cl', 'cl.id', '=', 's.client_id')
                ->join('companies as cp', 'cp.id', '=', 'sl.company_id')
                ->join('addresses as ad', 'ad.id', '=', 'cl.address_id')
                ->join('users as us', 'us.id', '=', 'sl.user_id')
                ->join('users as uc', 'uc.id', '=', 'cl.user_id')
                ->selectRaw("
                    cp.name as company,
                    us.name as seller,
                    uc.name as client,
                    ad.city,
                    ad.state,
                    s.sold_at,
                    s.status,
                    s.total_amount,
                    round(s.total_amount * cp.commission_rate / 100) as commission
                ");

            $viewSql = $query->toSql();
            $createViewSql = "CREATE VIEW sales_commission_view AS $viewSql";
            DB::statement($createViewSql);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS sales_commission_view');
    }
}
