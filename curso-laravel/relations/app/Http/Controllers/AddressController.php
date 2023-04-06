<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class AddressController extends Controller
{
    public function index(Request $request)
    {
        $addresses = Address::all();
        return $addresses;
    }

    public function findOne(Request $request)
    {
        $address = Address::find($request -> id);
        $address ['user'] = $address->user;
        return $address;
    }

    public function create(Request $request)
    {
        $address = Address::create($request->all());
        return $address;
    }

    public function delete(Address $id)
    {
        $id->delete();
        return 'Deletado';
    }

}
