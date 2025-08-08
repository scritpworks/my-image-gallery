const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.handler = async (event) => {
  try {
    const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || "").trim();
    console.log("Admin password loaded:", !!ADMIN_PASSWORD);

    const headers = {};
    for (const key in event.headers) {
      headers[key.toLowerCase()] = event.headers[key];
    }
    const providedPassword = (headers["x-admin-password"] || "").trim();
    console.log("Provided password:", providedPassword);


    console.log("ADMIN_PASSWORD:", ADMIN_PASSWORD ? "<set>" : "<not set>");
    console.log("Provided password:", providedPassword);

    console.log("ADMIN_PASSWORD (length):", `"${ADMIN_PASSWORD}"`, ADMIN_PASSWORD.length);
    console.log("Provided password (length):", `"${providedPassword}"`, providedPassword.length);

    const trimmedAdmin = ADMIN_PASSWORD.trim();
    const trimmedProvided = providedPassword.trim();

    console.log("Trimmed ADMIN_PASSWORD (length):", `"${trimmedAdmin}"`, trimmedAdmin.length);
    console.log("Trimmed Provided password (length):", `"${trimmedProvided}"`, trimmedProvided.length);

    if (trimmedProvided !== trimmedAdmin) {
      console.warn("Passwords do not match after trimming.");
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }


    if (providedPassword !== ADMIN_PASSWORD) {
      console.log("Unauthorized attempt");
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }

    const { public_id } = JSON.parse(event.body);
    console.log("Public ID to delete:", public_id);
    if (!public_id) {
      console.log("No public_id provided");
      return { statusCode: 400, body: JSON.stringify({ error: "No public_id provided" }) };
    }

    const result = await cloudinary.uploader.destroy(public_id);
    console.log("Cloudinary delete result:", result);

    if (result.result !== "ok" && result.result !== "not found") {
      console.log("Cloudinary deletion failed:", result.result);
      return { statusCode: 500, body: JSON.stringify({ error: `Cloudinary delete failed: ${result.result}` }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Delete error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
