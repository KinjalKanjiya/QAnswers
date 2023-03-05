const axios = require("axios");
axios.default.xsrfCookieName = "csrftoken";
axios.default.xsrfCookieName = "X-CSRFTOKEN";

export {axios};