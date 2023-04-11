<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$page ?? 'Minhas tarefas'}}</title>
    <link rel="icon" type="image/png" href="/assets/images/icon-td.png"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/style.css"/>
</head>
<body>

<div class="container">
    <div class="sidebar">
        <img src="/assets/images/task.png"/>
    </div>

    <div class="content">

        <nav>
            {{$btn ?? null}}
        </nav>

        <main>
            {{$slot}}
        </main>

    </div>

</div>


</body>
</html>
