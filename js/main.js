jQuery(function ($) {

    $('.centered').each(function (e) {
        $(this).css('margin-top', ($('#main-slider').height() - $(this).height()) / 2);
    });

    $(window).resize(function () {
        $('.centered').each(function (e) {
            $(this).css('margin-top', ($('#main-slider').height() - $(this).height()) / 2);
        });
    });


    //contact form
    var form = $('.contact-form');
    form.submit(function () {
        $this = $(this);
        $.post($(this).attr('action'), function (data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        }, 'json');
        return false;
    });

    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });
});

/*clase martes laboratoria*/

var a = 5;
var b = 6;
if(a > b){
console.log("el numero mayor es a")
}
console.log("el numero menor es b")

/*clase miercoles laboratoria++falta+++++++++++++++++++ARRAYS*/

var arreglo = [1,2,3,4,5,6,7,8,9,10];
var suma = 0; 
for (var i=0; i) 
/*+++++++++++++++++++++ARRAYS+++completo*/

var arreglo [67,87,1,100,102,4,5,55,45];
var numMaximo=999;
for (var i=0;i<arreglo.length;i++){
    if (numMaximo>arreglo[i]){
        munMaximo=arreglo [i];
    }
}

document.write("el número máximo es:"+numMaximo)

var arreglo [67,87,1,100,102,4,5,55,45];
var numMinnimo=999;
for (var i=0;i<arreglo.length;i++){
    if (numMinimo>arreglo[i]){
        munMinimo=arreglo [i];
    }
}

document.write("el número máximo es:"+numMinimo)

var arreglo [2,5,7,12,13,100,25,14,8,17,11];/*pares*/

for (var i=0;i<arreglo.length;i++){
    if (arreglo[i]%2==0){
        munMaximi=arreglo [i];
    }
}

document.write("el número máximo es:"+arreglo[i])