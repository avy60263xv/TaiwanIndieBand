function ValidateEmail() 
{
  const email = document.getElementById("emailValue");

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    {
      alert("Email送出成功");
      email.value="";
      email.placeholder="訂閱電子報";
      return (true)
    }
      alert("您輸入的Email格式有誤，請重新輸入");
      return (false)
}