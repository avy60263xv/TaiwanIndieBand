const ScreenWidth =  document.body.offsetWidth;
//console.log(ScreenWidth);
document.addEventListener( 'DOMContentLoaded', function () {
    if (ScreenWidth<=414){
        SmallSlider();
    }else{
        BigSlider();
    }
} );

function BigSlider(){
    new Splide( '.splide', {
        perPage: 3,
        rewind : true,
        perMove:1,
        width: 800,
        focus: 'center',
        perPage: 3,
        trimSpace: false,
        pagination: true,
        autoplay: true,
        start: 1,
        arrows: false,
        padding: {
            left : 0,
            right: '6rem',
        }
    } ).mount();
}

function SmallSlider(){
    new Splide( '.splide', {
        perPage: 3,
        rewind : true,
        perMove:1,
        width: 800,
        focus: 'center',
        perPage: 1,
        trimSpace: false,
        pagination: true,
        autoplay: true,
        start: 1,
        arrows: false,
        padding: {
            left : 0,
            right: '6rem',
        }
    } ).mount();
}