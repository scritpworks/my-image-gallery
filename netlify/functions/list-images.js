const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async () => {
  try {
    
    const res = await cloudinary.api.resources({
      type: "upload",
      prefix: "netlify-gallery",
      max_results: 200, 
    });

    const images = res.resources.map((r) => ({
      url: r.secure_url,
      public_id: r.public_id,
      width: r.width,
      height: r.height,
    }));

    return { statusCode: 200, body: JSON.stringify(images) };
  } catch (err) {
    console.error("List images error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
 