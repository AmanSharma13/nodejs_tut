const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        file.originalname.substring(file.originalname.indexOf("."))
    );
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/fileupload", upload.single("uploaded_file"), async (req, res) => {
  console.log(req.file, req.body);
});

app.get("/getfiles", async (req, res) => {
  try {
    const files = await File.find("/upload/");
    res.status(200).json({
      status: "Success",
      files,
    });
  } catch {
    res.status(400);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
