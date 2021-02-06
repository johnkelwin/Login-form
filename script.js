function toggle()
{
  var temp=document.getElementById('password');
  var eye= document.getElementById('eye')
  if(temp.type==='password')
  {
      temp.type='text';
      eye.classList.remove('fa-eye-slash')
      eye.classList.add('fa-eye')
  }
  else
  {
      temp.type="password";
      eye.classList.remove('fa-eye')
      eye.classList.add('fa-eye-slash')
  }
  
}