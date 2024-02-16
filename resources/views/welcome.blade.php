<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Offerings</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50">

    <!-- <div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            @if (Route::has('login'))
                <div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                    @auth
                        <a href="{{ url('/home') }}" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Home</a>
                    @else
                        <a href="{{ route('login') }}" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div> --> 

    <div class="container mx-auto px-4">
        <header class="text-center py-10">
            <h1 class="text-4xl font-bold text-gray-800">Dynamic Application Solutions</h1>
            <p class="text-xl text-gray-600 mt-2">Innovative software development services</p>
        </header>
        <section class="mt-10">
            <h2 class="text-3xl font-bold text-gray-800">Our Services</h2>
            <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="font-bold text-xl text-gray-800">Web Development</h3>
                    <p class="text-gray-600 mt-2">Custom web applications tailored to your business needs.</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="font-bold text-xl text-gray-800">Mobile App Development</h3>
                    <p class="text-gray-600 mt-2">Innovative and user-friendly mobile solutions for iOS and Android.</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="font-bold text-xl text-gray-800">Cloud Solutions</h3>
                    <p class="text-gray-600 mt-2">Scalable and secure cloud infrastructure design and implementation.</p>
                </div>
            </div>
        </section>
    </div>
</body>
</html>