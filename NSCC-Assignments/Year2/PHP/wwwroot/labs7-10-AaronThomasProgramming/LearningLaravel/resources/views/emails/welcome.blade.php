@component('mail::message')
# Introduction
Hello from Code's Tape
{{--The body of your message.--}}
Welcome to our cool application

{{--@component('mail::button', ['url' => ''])--}}
{{--Button Text--}}
{{--@endcomponent--}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
