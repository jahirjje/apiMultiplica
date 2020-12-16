<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<script src="js/jquery.js"></script>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>

<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Colores</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav><br>

<body onload="main();">
<input type="hidden" value="1">
    <div class="container"></div><br>
</body>

<nav class="navbar navbar-expand-md">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link anterior" href="#" onclick="return next(0);">&lt; Anterior</a>
            </li>
        </ul>
    </div>
    <div class="mx-auto order-0"></div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link siguiente" href="#" onclick="return next(1);">Siguiente &gt;</a>
            </li>
        </ul>
    </div>
</nav><br>

<script>
    function next(clic){
        if (clic == 1) {
            page++;
            main();
        }else{
            page--;
            main();
        }
    }
    function copy(id){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(".color"+id).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Texto copiado");
    }
</script>