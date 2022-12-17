const axios = require("axios");

axios
  .get(
    "https://raw.githubusercontent.com/armaan-crypto/m3u-channels/main/allchannels.m3u?token=GHSAT0AAAAAAB2JRFFMWRWHY6GTZXJUHMI6Y46J3EA"
  )
  .then((result) => {
    console.log(result.data);
  });
