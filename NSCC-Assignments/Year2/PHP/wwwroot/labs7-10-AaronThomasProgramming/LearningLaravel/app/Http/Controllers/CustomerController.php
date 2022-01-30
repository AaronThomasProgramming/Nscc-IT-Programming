<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeMail;
use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Mail;

class CustomerController extends Controller
{
    public function index(Request $request){

//        $customers = \App\Models\Customer::all();

//        dd($request->query('active'));
//        dd(request());

//        $customers = Customer::all();

//        $customers = Customer::where('active', 1)->get();

        $customers = Customer::where('active', $request->query('active', 1))->get();

        return view('customer.index', compact('customers'));
    }

    public function create(){

//        $customers = Customer::all();
//        return view('customer.create', compact('customers'));

        $customer = new Customer();

        return view('customer.create', compact('customer'));
    }

    public function store(){

//        $data = \request()->validate([
//            'name'=> 'required',
//            'email'=> 'required|email'
//        ]);
//
//
//        $customers = \App\Models\Customer::create($data);

//        \App\Models\Customer::create($this->validatedData());

//        Customer::create($this->validatedData());

        $customer = Customer::create($this->validatedData());

        Mail::to($customer->email)->send(new WelcomeMail());

//        return redirect()->back();
        return redirect('/customers/'. $customer->id);
    }

    public function show(Customer $customer){

//        dd($customer);

//        $customer = \App\Models\Customer::findOrFail($customerId);

//        dd($customer);
        return view('customer.show', compact('customer'));
    }

    public function edit(Customer $customer){

        return view('customer.edit', compact('customer'));
    }

    public function update(Customer $customer){

//        $data = \request()->validate([
//            'name'=> 'required',
//            'email'=> 'required|email'
//        ]);
//
//        $customer->update($data);

//        $customers = \App\Models\Customer::create($data);

        $customer->update($this->validatedData());

        return redirect('/customers');
    }

    public function destroy(Customer $customer){

        $customer->delete();

        return redirect('/customers');
    }

    protected function validatedData(){
        return \request()->validate([
            'name'=> 'required',
            'email'=> 'required|email'
        ]);
    }

}
