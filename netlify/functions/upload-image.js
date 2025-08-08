const cloudinary = require("cloudinary").v2;

console.log("Starting Cloudinary config...");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Using Cloudinary Config:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret_present: !!process.env.CLOUDINARY_API_SECRET,
    admin_password_set: !!process.env.ADMIN_PASSWORD,
});

exports.handler = async (event) => {
    try {
        const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || "").trim();

        // Normalize header keys to lowercase for safety
        const headers = {};
        for (const key in event.headers) {
            headers[key.toLowerCase()] = event.headers[key];
        }

        const providedPassword = (headers["x-admin-password"] || "").trim();

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

        if (!ADMIN_PASSWORD) {
            console.error("ADMIN_PASSWORD is not set in environment variables.");
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Server configuration error: ADMIN_PASSWORD missing" }),
            };
        }

        if (providedPassword !== ADMIN_PASSWORD) {
            console.warn("Unauthorized attempt with password:", providedPassword);
            return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
        }

        const { data } = JSON.parse(event.body);
        if (!data) {
            return { statusCode: 400, body: JSON.stringify({ error: "No image data provided" }) };
        }

        console.log("Uploading image to Cloudinary...");

        const uploaded = await cloudinary.uploader.upload(data, {
            folder: "netlify-gallery",
        });

        console.log("Upload successful:", uploaded.secure_url);

        return {
            statusCode: 200,
            body: JSON.stringify({ url: uploaded.secure_url, public_id: uploaded.public_id }),
        };
    } catch (err) {
        console.error("Upload error:", err);
        return { statusCode: 500, body: JSON.stringify({ error: "Upload failed", details: err.message }) };
    }
};
