const express = require("express");
const bodyParser = require("body-parser");
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
var QRCode = require("qrcode");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/generate-ticket", async (req, res) => {
  const { experienceName, date, numberOfPersons, customerName } = req.body;

  // Generate a unique booking ID (You can use a library like uuid for this)
  const bookingID = generateBookingID();

  // a background image template
  const bgimg = await loadImage("bgimg.png");

  // Create a canvas and draw the ticket details
  const canvas = createCanvas(bgimg.width, bgimg.height);
  const ctx = canvas.getContext("2d");

  ctx.font = "20px Arial";
  ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillText(`${bookingID}`, 132, 35);
  ctx.fillStyle = "black";
  ctx.fillText(`${experienceName} Experience`, 48, 300);
  ctx.fillText(`${date}`, 48, 400);
  ctx.fillText(`${numberOfPersons}`, 420, 510);
  ctx.fillText(`${customerName}`, 48, 510);

  //adding qr code
  const qrCodeText = bookingID;
  const qrCodeDataUrl = await QRCode.toDataURL(qrCodeText);
  var dt = qrCodeDataUrl.split(",")[1];
  let buff = Buffer.from(dt, "base64");

  loadImage(buff).then((image) => {
    ctx.drawImage(image, 170, 600, 150, 150);

    ctx.font = "bold Arial";
    ctx.fillStyle = "grey";
    ctx.fillText(`${bookingID}`, 200, 770);
  });

  // Save the canvas as an image
  const imagePath = `ticket_${bookingID}.png`;
  const out = fs.createWriteStream(imagePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);

  // Respond with the image file
  out.on("finish", () => {
    res.download(imagePath, "ticket.png", (err) => {
      // Delete the image file after sending
      fs.unlinkSync(imagePath);
    });
  });
});

function generateBookingID() {
  // This is a simple example, we can use more robust method to generate IDs
  return Math.random().toString(36).substring(7);
}

app.get("/", (req, res) => {
  res.send("server runing");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
