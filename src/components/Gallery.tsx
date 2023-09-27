import { fetchImages } from "@/lib/fetchImages";
import { Footer, ImageContainer } from "@/components";
import { addBlurredDataUrls } from "@/lib/getBase64";
import { getPrevNextPage } from "@/lib/getPrevNextPage";
import qs from "query-string";

type GalleryProps = {
  topic?: string;
  page?: string;
};

export const Gallery = async ({ topic = "curated", page }: GalleryProps) => {
  const url = qs.stringifyUrl({
    url:
      topic === "curated"
        ? "https://api.pexels.com/v1/curated"
        : "https://api.pexels.com/v1/search",
    query: {
      query: topic,
      page,
    },
  });

  const images = await fetchImages(url);

  if (!images || !images.per_page) {
    return <h2 className="m-4 text-2xl font-bold">No images found</h2>;
  }

  const imagesWithBlur = await addBlurredDataUrls(images);

  const { prevPage, nextPage } = getPrevNextPage(images);

  return (
    <>
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {imagesWithBlur.map((photo) => (
          <ImageContainer photo={photo} key={photo.id} />
        ))}
      </section>
      <Footer
        nextPage={nextPage}
        prevPage={prevPage}
        topic={topic}
        page={page}
      />
    </>
  );
};
