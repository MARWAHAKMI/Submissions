
function Clear()
{
    if (confirm('Are you sure you want to clear Fields?')) {
        document.getElementById('name').value = " "
        document.getElementById('surname').value = " "
        document.getElementById('city').value = " "
    } else {
        // Do nothing!
    }
}