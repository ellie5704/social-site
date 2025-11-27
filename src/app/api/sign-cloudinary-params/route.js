import { v2 as cloudinary } from "cloudinary";
 
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
 
export async function POST(request) {
  const body = await request.json();
 
  // Get params to sign from the request body
  const { paramsToSign } = body;
 
  // Generate the signature
  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET
  );
 
  // Return the signature
  return Response.json({ signature });
}