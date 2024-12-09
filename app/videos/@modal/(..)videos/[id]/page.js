import Modal from "@/components/Modal";
import Image from "next/image";
export default async function VideoDetailsPage({ params }) {
  const { id } = params;
  const data = await import("@/data/videos.json");
  const video = data.default.find((vid) => vid.videoId === id);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <Modal>
      <div className="p-8">
        <Image
          src={video.thumbnail}
          alt={video.title}
          className="rounded-md mb-4 w-full h-64 object-cover"
        />
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <p className="text-sm text-gray-700 mb-4">{video.description}</p>
        <p className="text-sm text-gray-500">Channel: {video.channelTitle}</p>
      </div>
    </Modal>
  );
}
