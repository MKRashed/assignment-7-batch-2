import { NextResponse } from "next/server";
const videos = () => import("@/data/videos.json").then((res) => res.default);

const findMethod = async (id) => {
  const data = await videos();
  return data?.results.find((video) => video.id === +id);
};

export async function GET(request, { params }) {
  const { id } = params;
  const video = await findMethod(id);
  if (!video) {
    return NextResponse.json(
      { status: "error", message: "Not Found" },
      { status: 404 }
    );
  }
  return NextResponse.json(video);
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const video = await findMethod(id);
  if (!video) {
    return NextResponse.json(
      { status: "error", message: "Not Found" },
      { status: 404 }
    );
  }
  const body = await request.json();
  const updatedVideo = { ...video, ...body };
  return NextResponse.json(updatedVideo);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const video = await findMethod(id);
  if (!video) {
    return NextResponse.json(
      { status: "error", message: "Not Found" },
      { status: 404 }
    );
  }
  return NextResponse.json({
    status: "success",
    message: "Video deleted successfully",
  });
}
