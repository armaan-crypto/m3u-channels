const axios = require("axios");

axios
  .get(
    "https://drive.google.com/file/d/1T3qd_u7di0F1txqQWqWI6A6DECCBfB0z/view?usp=sharing"
  )
  .then((result) => {
    console.log(result.data);
  });
