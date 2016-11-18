var currentMenu = null;
var lastMenu = null;
var gameStarted = false;

var click = new Audio('assets/sounds/click.mp3');
var coin = new Audio('assets/sounds/coin.mp3');

function frame() {
    update();
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);

function update() {
    // console.log('upating');
}

$(document).ready(function() {
    $(document).mousemove(function(e) {
        var currentHover = e.target;
        var hoveredMenu = $(currentHover).closest('[data-menu]').data('menu');

        if (hoveredMenu !== undefined) {
            gameStarted = true;
        }

        if (gameStarted) {
            checkForFailure(hoveredMenu);
        }
    });

    $('li').mouseenter(function() {
        click.play();
    });

    $('.gold').click(function() {
        coin.play();
        $(this).removeClass('gold');
    })
});

function checkForFailure(hoveredMenu) {
    console.log('hoveredMenu: ', hoveredMenu);

    if (hoveredMenu === undefined) {
        $('.failure').css('display', 'block')
    } else {
        currentMenu = hoveredMenu;
    }
}
