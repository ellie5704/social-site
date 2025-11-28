const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;