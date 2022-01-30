@extends('app')

@section('title', 'Services')

@section('content')
    <h1>Welcome to Laravel 6 from  {{$string}}</h1>
    <ul>
        {{--        @foreach($services as $service)--}}
        {{--            <li>{{$service}}</li>--}}
        {{--        @endforeach--}}
{{--        @forelse($services as $service)--}}
{{--            <li>{{$service}}</li>--}}
{{--        @empty--}}
{{--            <li>no services</li>--}}
{{--        @endforelse--}}
    </ul>
@endsection
