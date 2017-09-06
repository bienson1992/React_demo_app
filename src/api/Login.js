const login = (email, password) => (
  fetch('http://192.168.51.2/app/login.php',{
    method:'POST',
    header:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then(res=>res.json())
);
module.exports = login;
