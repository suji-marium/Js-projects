function validate()
{
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(cpassword)
    
}

function checkusername(username)
{
    if(username.length>7)
    {
        document.getElementById('username').classList.add('success')
    }
    else
    {
        document.getElementById('username').classList.add('error')
    }
}