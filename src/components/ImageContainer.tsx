import { Photo } from "@/models/images";
import Link from "next/link";
import Image from "next/image";

type ImageContainerProps = {
  photo: Photo;
};

export const ImageContainer = ({ photo }: ImageContainerProps) => {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{
        gridRow: `span ${photoSpans}`,
      }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            blurDataURL={photo.blurredDataUrl}
            sizes="250px"
            className="group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
          />
        </div>
      </Link>
    </div>
  );
};
