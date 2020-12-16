var page = 1;
var row = 1;
var count = 0;
var col = 1;
var totalPage;

function main(){
    $( ".row1" ).remove();
    $(".anterior").removeClass("disabled");
    $(".siguiente").removeClass("disabled");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://reqres.in/api/colors?page="+page,
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             totalPage = data.total_pages;
             if (page == 1) {
                $(".anterior").addClass("disabled");
             }
             if (page == totalPage) {
                $(".siguiente").addClass("disabled");  
             }
             getData(data, page);
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
            alert( "La solicitud NO se ha realizado correctamente." );
         }
    });
}

function getData(data, page){
    console.log(data);
    colors = data.data
    $(".container").append('<div class="row row'+row+'"></div>');
    for (var i = 0; i < 5; i++) {
        addCol(colors[i]);
        count++;
    }  
}  

function addCol(rs) {
    col = '<div class="card col-4" onclick="return copy('+rs.id+');">' +
                '<div class="card-body">' +
                    '<p class="card-title" style="text-align: left;">' + rs.year + '</p>' +
                    '<p class="card-text">' + rs.name + '</p>' +
                    '<p class="card-text color'+rs.id+'">' + rs.color + '</p>' +
                    '<p class="card-text" style="text-align: right; vertical-align: top;">' + rs.pantone_value + '</p>' +
                '</div>' +
            '</div>';
    $(".row"+row).append(col);
}

function copy(id){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(".color"+id).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert(id);
}

function next(clic){
    if (clic == 1) {
        page++;
        main();
    }else{
        page--;
        main();
    }
}
