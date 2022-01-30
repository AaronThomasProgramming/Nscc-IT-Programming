<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $variable = 'hello from Routes Again';

//        $variable = [
//            'Service 1',
//            'Service 2',
//            'Service 3',
//            'Service 4'
//        ];

//    return view('subviews.hello', ['someData' => $variable]);

//        return view('subviews.hello', compact('variable'));


//        return view('app');

        return view('about');

//        return view('services');

    }

    public function about()
    {
        return view('about');
    }

//    public function services()
//    {
////        $services = [
////            'Service 1',
////            'Service 2',
////            'Service 3',
////            'Service 4'
////        ];
//        $services = \App\Models\Service::all();
////        $services = \App\Models\Task::all();
////        dd($services);
//
////        return view('services');
//        return view('services', compact('services'));
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
    public function store(Request $request)
    {
        //
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
