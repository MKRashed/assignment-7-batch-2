"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Videos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const data = await import("@/data/videos.json");
      setVideos(data.default);
    };
    fetchVideos();
  }, []);

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Streams of the day</h2>
        <a
          href="#"
          className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Link
            href={`/videos/${video.videoId}`}
            key={video.videoId}
            className="rounded-lg overflow-hidden bg-color-gray"
          >
            <Image
              src={video.thumbnail}
              alt="Stream 1"
              className="w-full h-40 object-cover"
              width={160}
              height={160}
            />
            <div className="p-2">
              <p className="font-semibold">{video?.title}</p>
              <p className="text-sm text-gray-400">{video?.channelTitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
