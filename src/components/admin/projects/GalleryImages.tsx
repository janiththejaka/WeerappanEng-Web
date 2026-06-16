import { ProjectImage } from "@/types/projectImage";

interface GalleryImagesProps {
  images: ProjectImage[];
}

export default function GalleryImages({
  images,
}: GalleryImagesProps) {
  if (images.length === 0) {
    return (
      <p>
        No gallery images uploaded.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="border rounded overflow-hidden"
        >
          <img
            src={image.image_url}
            alt="Project Gallery"
            className="w-full h-40 object-cover"
          />
        </div>
      ))}
    </div>
  );
}