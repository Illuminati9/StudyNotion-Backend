const cloudinary = require("cloudinary").v2;

exports.cloudinaryConnect = () => {
  try {
    const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

    if (!CLOUDINARY_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
      console.error("Missing Cloudinary Environment Variables.");
      return;
    }

    cloudinary.config({
      cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });

    console.log("Cloudinary Connected Successfully.");
  } catch (error) {
    console.error("An Error Occurred While Configuring Cloudinary:", error);
  }
};
