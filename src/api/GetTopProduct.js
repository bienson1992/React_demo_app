const getTopProduct =()=> (
  fetch('http://192.168.51.2/app/')
  .then(res=>res.json())
);
module.exports = getTopProduct;
