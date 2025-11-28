"use client";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

export default function UploadFeed() {
  const updateLocalStorage = (uploadedUrl) => {
    if (typeof window === "undefined") return;

    // Get existing images from localStorage
    const stored = localStorage.getItem("images");
    let imagesArray = [];

    if (stored) {
      try {
        imagesArray = JSON.parse(stored); // parse string → array
      } catch (e) {
        console.error("Failed to parse images from localStorage", e);
        imagesArray = [];
      }
    }

    // Add the new image
    const newImages = [...imagesArray, { url: uploadedUrl }];

    // Save back to localStorage
    localStorage.setItem("images", JSON.stringify(newImages));

    return newImages;
  };

  return (
    <main>
      <CldUploadButton
        uploadPreset="cats"
        signatureEndpoint="/api/sign-cloudinary-params"
        onSuccess={(result, widget) => {
          console.log("Upload result:", result);

          const uploadedUrl = result?.info?.secure_url;
          if (!uploadedUrl) return;

          updateLocalStorage(uploadedUrl);
          widget?.close();
        }}
      />

      <div className="grid gap-4 mt-6">
        {/* you can read from localStorage here later if you want to render images */}
      </div>
    </main>
  );
}
