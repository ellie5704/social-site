"use client"

import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from 'next-cloudinary';
import { useState, useEffect } from "react";

export default function Home() {
  const [resource, setResource] = useState()
  useEffect(() => {
    console.log(resource)
  }, [resource])

  return (
    <div>
      <CldUploadButton
        onSuccess={(result, widget) => {
          // save uploaded resource info (remove invalid "etc" reference)
          setResource(result?.info);
          widget?.close();
          console.log(result);
        }}
        signatureEndpoint="/api/sign-cloudinary-params"
        uploadPreset="cat"
      >
        Upload to Cloudinary
      </CldUploadButton>

    </div>
  );
}
