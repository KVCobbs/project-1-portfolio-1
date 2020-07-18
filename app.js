const display = function (){
    $('.navb').show()
}
const hide = function(){
    $('.navb').hide()
}

function test(){
    console.log('Clicky')
}

// function getInput() {
//     let name = $('.name').val()
//     let email = $('.email').val()
//     let phone = $('.phone').val()
//     let message = $('.message').val()
//     console.log(name, email, phone, message)
// }

const $menuBtn = $('.menub')
let menuOpen = false;
$($menuBtn).on('click', () =>{
    if(!menuOpen) {
        $menuBtn.attr('class', 'menub open')
        menuOpen = true;
        display()
    }else {
        $menuBtn.attr('class', 'menub')
        menuOpen = false;
        hide()
    }
})