const express = require("express");
const app = express();
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT || 4000;

database.dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "*",
  methods: ["GET,POST,PUT,DELETE"],
  credentials: true,
}));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudinaryConnect();

app.get("/api/v1",async(req,res)=>{
  return res.status(200).json({
    success: true,
    message: "Server is up and runnig...."
  })
})
app.use("/api/v2/auth", userRoutes);
app.use("/api/v2/profile", profileRoutes);
app.use("/api/v2/course", courseRoutes);
app.use("/api/v2/payment", paymentRoutes);
app.use("/api/v2/reach", contactUsRoute);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
