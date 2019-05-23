var pass = document.getElementById('password')
var conf = document.getElementById('confirmation')


function AuthFunc()
{
    if( (pass.value) != (conf.value))
    {
        pass.style.border = "3px solid red"
        conf.style.border = "3px solid red"
    }
}



