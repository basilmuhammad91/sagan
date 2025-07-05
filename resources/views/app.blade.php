<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title inertia>{{ config('app.name') }}</title>
    @vite('resources/js/app.js')
    @vite('resources/css/app.css')
    @inertiaHead
</head>
<body class="antialiased">
    @inertia
</body>
</html>
