const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT;





const axios = require('axios');
const path = require('path');





app.use(express.static('dist'));









app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})



//control . seems to allow something to be extracted to global scope by putting the contents of said thing into a function (which you name on the spot)
//and have that function outisde in the global area.