@extends('app')

@section('title', 'Services')

@section('content')
    <h1>Welcome to Laravel 6 from services</h1>

    <form action="/service" method="POST">
{{--        <input type="text" name="name" autocomplete="off">--}}
        <input type="text" name="description" autocomplete="off">

        @csrf
        <button>Add Service</button>
    </form>
{{--    <p style="color: red;">@error('name'){{$message}} @enderror</p>--}}
    <p style="color: red;">@error('description'){{$message}} @enderror</p>
    <ul>
{{--        @foreach($services as $service)--}}
{{--            <li>{{$service}}</li>--}}
{{--        @endforeach--}}
        @forelse($services as $service)
{{--            {{dd($service->name)}}--}}
{{--            {{dd($service->name)}}--}}
{{--            <li>{{$service}}</li>--}}
{{--            <li>{{$service->name}}</li>--}}
            <li>{{$service->description}}</li>
        @empty
            <li>no services</li>
        @endforelse
    </ul>
@endsection
