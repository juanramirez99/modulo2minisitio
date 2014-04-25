function validateForm()
{
var x=document.forms["myForm"]["fname"].value;
if (x==null || x=="")
  {
  alert("ingrese el primer nombre pendejo");
  return false;
  }
}
