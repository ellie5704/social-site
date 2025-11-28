"use client"

import Image from "next/image";
import { useState } from "react";

export default function PropertyCard({
  profileIcon,
  location,
  locationText,
  meatballMenu,
  image,
  commentIcon,
  sendIcon,
  saveIcon,
  accountName,
  imgCaption,
  hideActions, // optional boolean to hide heart/bookmark etc.
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="p-4 text-md text-black flex flex-col w-[300px]">
      <div className="font-bold">{accountName}</div>

      <div className="flex gap-1">
        <div>{profileIcon}</div>
        <div>{location}</div>
        <div>{locationText}</div>
        <div className="ml-auto">{meatballMenu}</div>
      </div>

      <Image
        src={image}
        alt={accountName}
        width={300}
        height={400}
        className="rounded-md"
      />

      {/* ACTION ICONS — hidden if hideActions={true} */}
      {!hideActions && (
        <div className="flex gap-4 mt-2">
          {/* HEART (LIKE) */}
          <div onClick={() => setIsLiked(!isLiked)} className="cursor-pointer">
            {isLiked ? (
              <div>
                {/* filled heart */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </div>
            ) : (
              <div>
                {/* outline heart */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* COMMENT ICON */}
          <span>{commentIcon}</span>

          {/* SEND ICON */}
          <span>{sendIcon}</span>

          {/* BOOKMARK (SAVE) */}
          <div className="ml-auto">
            <div onClick={() => setIsSaved(!isSaved)} className="cursor-pointer">
              {isSaved ? (
                <div>
                  {/* filled bookmark */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div>
                  {/* outline bookmark */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-2 mt-2">
        <div className="font-bold">{accountName}</div>
        <div className="italic">{imgCaption}</div>
      </div>
    </div>
  );
}
