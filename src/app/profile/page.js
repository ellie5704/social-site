import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";

export default function Home() {
  
 const profile = {
    name: "NekoExpress",
    username: "@neko.express",
    bio: "White cat, dark thoughts • Pics of my life and loves • Be nice about my friends!",
    avatar:
      "https://images.unsplash.com/photo-1518478793609-e762ed795b6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwc2VsZmllfGVufDB8fDB8fHww",
    posts: 14,
    followers: 970,
    following: 321,
  };

  const usePlaceHolder = true;

  const images = [
    "https://images.unsplash.com/photo-1698319650730-d673fef1b714?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdG5pcHxlbnwwfHwwfHx8MA%3D%3D",
  
    "https://images.unsplash.com/photo-1639056766820-b69e4c97c451?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1705787462000-c83311f36441?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdCUyMGFydCUyMG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",

    "https://images.unsplash.com/photo-1762956227278-d136853ca8c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdCUyMGFydCUyMG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",

    "https://images.unsplash.com/photo-1608031753473-7f6fc2ce41d6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdCUyMHRyZWV8ZW58MHx8MHx8fDA%3D",

    "https://images.unsplash.com/photo-1482638591678-a11589a805f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHx8fDA%3D",

    "https://images.unsplash.com/photo-1730041822286-c6c2b579a7d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFsbG93ZWVuJTIwY2F0fGVufDB8fDB8fHww",

    "https://images.unsplash.com/photo-1698494929974-d038fc52c71d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwcHVtcGtpbnxlbnwwfHwwfHx8MA%3D%3D",

    "https://images.unsplash.com/photo-1698000947100-ac0afd18155a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYXV0dW1ufGVufDB8fDB8fHww",

    "https://images.unsplash.com/photo-1745058814929-db05075f5be1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwbGlnaHQlMjBzbGVlcHxlbnwwfHwwfHx8MA%3D%3D",

    "https://images.unsplash.com/photo-1759157237741-36ffaf957c9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdCUyMGxpZ2h0JTIwc2xlZXB8ZW58MHx8MHx8fDA%3D",

    "https://images.unsplash.com/photo-1602924097911-a78ca1af38c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",

    "https://images.unsplash.com/photo-1592301388444-185c2d047bbd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",

    "https://images.unsplash.com/photo-1518478793609-e762ed795b6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwc2VsZmllfGVufDB8fDB8fHww"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-4">
     
     
      {/* ---------------- PROFILE HEADER ---------------- */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={profile.avatar}
            alt="Profile avatar"
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
            <h1 className="text-2xl text-gray-800 font-semibold">{profile.name}</h1>
            <button className="px-4 py-1 border rounded-md text-sm text-gray-800  font-medium hover:bg-gray-100">
              Follow
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4">
  <p>
    <span className="font-semibold text-gray-800">{profile.posts}</span>
    <span className="text-gray-500"> posts</span>
  </p>

  <p>
    <span className="font-semibold text-gray-800">{profile.followers.toLocaleString()}</span>
    <span className="text-gray-500"> followers</span>
  </p>

  <p>
    <span className="font-semibold text-gray-800">{profile.following}</span>
    <span className="text-gray-500"> following</span>
  </p>
</div>

          {/* Bio */}
          <div className="mt-3">
            <p className="font-medium text-gray-800">{profile.username}</p>
            <p className="text-gray-800">{profile.bio}</p>
          </div>
        </div>
      </div>

     
     
     <div className="w-full max-w-6xl grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {images.map((src, index) => (
           <div key={index} className="w-full aspect-square overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg">
            {usePlaceHolder ? (
             <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              // Real PropertyCard
              <PropertyCard
                profileIcon={profileIcon}
                hideActions={true}
                image={src}
                imageClassName="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}