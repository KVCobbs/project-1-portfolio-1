


const display = function (){
    $('.icon').hide()
    $('.navb').show()
}
const hide = function(){
    $('.navb').hide()
    $('.icon').show()
}

function test(){
    console.log('Clicky')
}

function getInput() {
    let name = $('name= "name"').val()
    let email = $('name="email"').val()
    let phone = $('name="phone"').val()
    let message = $(' name="message"').val()
    console.log(name, email, phone, message)
}


$('.submit').on('click', getInput())