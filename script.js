$(function(){
    $("img").css( {
        "width" : "300px",
        "border-radius" : "20px",
        "margin" : "20px",
        "cursor" : "zoom-in"
    } )

    $("img:even").css( "float" , "left" );
    $("img:odd").css( "float" , "right" );


    $("img").attr( "title", "cars" );


    $("#bg").css( {
        "display" : "none",
        "width" : "100%",
        "height" : "100%",
        "background-repeat" : "no-repeat",
        "background-size" : "contain",
        "background-position" : "center",
        "position" : "fixed",
        "top" : 0,
        "left" :0,
        // "background-color" : "red"

    } )


    $("img").on("click", function(){
        let src = $(this).attr("src");

        $("#bg").css( {
            "display" : "block",
            "background-image" : ` url('${src}')`,
        } )

    })


    $("#bg").on("click", function(){
        let src = $(this).attr("src");

        $("#bg").css({
            "display" : "none",
            "background-image" : ` url('${src}')`,
        })
    })

})