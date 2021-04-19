let terminalImput = process.argv;
const fsPromises = require("fs/promises");
const axios = require("axios");

const fcn = async (url) => {
  try {
    const response = await axios.get(url);
    await fsPromises.writeFile("index.html", response.data);
    console.log(response.headers);
  } catch (e) {
    console.log(e.message);
  }
};

fcn(terminalImput[2]);
