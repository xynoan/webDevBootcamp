/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

inquirer
  .prompt([
    {
      message: "Please type link: ",
      name: "link",
    },
  ])
  .then((answers) => {
    const { link } = answers;
    const qr_png = qr.image(link, { type: "png" });
    qr_png.pipe(fs.createWriteStream("link.png"));

    fs.writeFile("link.txt", link, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
