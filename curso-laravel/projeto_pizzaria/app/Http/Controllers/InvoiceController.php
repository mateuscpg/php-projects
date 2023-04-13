<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index(Request $request)
    {
        $invoices = Invoice::all();
        return $invoices;
    }

    public function findOne(Request $request)
    {
        $invoice = Invoice::find($request->id);
        $invoice['user']= $invoice->user;
        $invoice['address']= $invoice->address;
        return $invoice;
    }

    public function create(Request $request)
    {
        $invoice = Invoice::create($request->all());
        return $invoice;
    }

    public function delete(Invoice $id)
    {
        $id ->delete();
        return 'Pedido deletado';
    }
}
