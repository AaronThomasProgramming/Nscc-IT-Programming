<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        $services = \App\Models\Service::all();
        $services = \App\Models\Task::all();
//        dd($services);

//        return view('services');
        return view('service.index', compact('services'));
    }

//    public function store(){
//
//        dd('inside');
//    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
//        dd('inside');

        $data = request()->validate([
            'description' => 'required'
//            'name' => 'required'
//            'name' => 'required|min:5|max:10'
        ]);

//        \App\Models\Service::create($data);

        \App\Models\Task::create($data);

//        dd($data);
//
//        $service = new \App\Models\Service();
//
//        $service->name = request('name');
//        $service->save();

//        $service = new \App\Models\Task();
//
//        $service->description = request('name');
//        $service->save();

//        dd(request('name'));
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
