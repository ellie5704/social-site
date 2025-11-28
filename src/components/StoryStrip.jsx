"use client"

import Image from "next/image";

export default function StoryStrip({ navbarWidth = 96 }) {
  // `navbarWidth` is the pixel width reserved on the right so the strip
  // doesn't overtake a right-side navbar. Default is 96px (adjustable).

  const stories = [

 {
      image: "https://images.unsplash.com/photo-1518478793609-e762ed795b6d?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "NekoExpress",
      unread: true,
    },
    {
      image: "https://images.unsplash.com/photo-1614705950633-1f1141e2fc47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwc2VsZmllfGVufDB8fDB8fHww",
      name: "Trudy-Vee",
      unread: false,
    },
    {
      image: "https://images.unsplash.com/photo-1725035331732-e10745c06251?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdCUyMHNlbGZpZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Je_nais_pas_un_chat",
      unread: true,
    },

    {
      image: "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Purdita",
      unread: true,
    },
    {
      image: "https://images.unsplash.com/photo-1667409235742-678f1d53b90e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Eric",
      unread: false,
    },
    {
      image: "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Olverton",
      unread: true,
    },

    {
      image: "https://images.unsplash.com/photo-1674425587688-bbbeb6e0a7d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "Maya_the_Best",
      unread: true,
    },
    {
      image: "https://images.unsplash.com/photo-1711180437483-ad19d3f1453f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Luna_Loves_Lasers",
      unread: true,
    },
    {
      image: "https://images.unsplash.com/photo-1703289480486-29365163bb8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwc2lsbHl8ZW58MHx8MHx8fDA%3D",
      name: "GimmeCatnip",
      unread: true,
    },
    // add more as needed
  ];

  return (
    <div className="relative w-full pt-6 ">
      <div className="overflow-x-auto no-scrollbar">
        <div
          className="flex items-center gap-4 px-4"
          style={{ paddingRight: `${navbarWidth}px` }}
        >
          {stories.map((s, i) => (
            <div key={i} className="flex flex-col items-center w-20 shrink-0">
              <div
                className={`relative rounded-full p-0.5 ${
                  s.unread ? "bg-linear-to-tr from-yellow-200 via-lime-500 to-green-600" : "bg-gray-400"
                }`}
              >
                <div className="rounded-full bg-white p-0.5">
                <div className="relative w-16 h-16 p-0.5 bg-white rounded-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              </div>
              <div className="text-xs truncate w-16 text-center mt-1 text-black">{s.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle right-side fade so stories visually stop before a right navbar */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-linear-to-l from-white/80 to-transparent" />
    </div>
  );
}
