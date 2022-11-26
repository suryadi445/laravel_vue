<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel Vue</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>

    <div id="app">
        <h2 v-text="title + ' + Vue Js'"></h2>

        <header-component></header-component>
        <example-component></example-component>
        <footer-component></footer-component>
    </div>

</body>

</html>
