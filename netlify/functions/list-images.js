const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async (event) => {
  try {
    const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || "").trim();

    // Normalize headers
    const headers = {};
    for (const key in event.headers) {
      headers[key.toLowerCase()] = event.headers[key];
    }
    const providedPassword = (headers["x-admin-password"] || "").trim();

    if (!ADMIN_PASSWORD || providedPassword !== ADMIN_PASSWORD) {
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }

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
 