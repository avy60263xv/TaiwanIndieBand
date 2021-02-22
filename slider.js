const ScreenWidth =  document.body.offsetWidth;
console.log(ScreenWidth);
document.addEventListener( 'DOMContentLoaded', function () {
    if (ScreenWidth<=414){
        SmallSlider();
    }else{
        BigSlider();
    }
} );

function BigSlider(){
    new Splide( '.splide', {
        perPage: 4,
        rewind : true,
        perMove:1,
        width: 2500,
        pagination: false
    } ).mount();
}

function SmallSlider(){
    new Splide( '.splide', {
        perPage: 1,
        rewind : true,
        perMove:1,
        width: 2500,
        pagination: false
    } ).mount();
}
