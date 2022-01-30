<h1>Working</h1>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0,
            minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
{{--    <title>Laravel 6 Beginner</title>--}}
    <title>@yield('title')</title>
</head>
<body>
    @include('nav')
{{--<ul>--}}
{{--    <li><a href="/about">About Us</a></li>--}}
{{--    <li><a href="/services">Services</a></li>--}}
{{--</ul>--}}
    @yield('content')
{{--    <h1>Welcome to Laravel 6</h1>--}}
{{--    <p>With some additional text</p>--}}
</body>
</html>
