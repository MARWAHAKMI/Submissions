var p = document.querySelector('p')
function changeColor(color)
{
    switch(color)
    {
        case 'g':
        {
            p.style.color = "green"
            break
        }
        case 'r':
        {
            p.style.color = "red"
            break
        }
        case 'b':
        {
            p.style.color = "blue"
            break
        }
    }
}