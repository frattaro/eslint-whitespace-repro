var fs = require("fs");

var fixture = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BZD"
  })
    .format(28524.25);

fs.writeFileSync("./fixtures/test.js",  `export const value = \`${fixture}\`;`);
