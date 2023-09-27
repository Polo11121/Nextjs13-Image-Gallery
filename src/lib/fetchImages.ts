import { ImagesResults, ImageWithPhotosSchema } from "@/models/images";
import { env } from "@/lib/env";

export const fetchImages = async (
  url: string
): Promise<ImagesResults | undefined> => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Fetch Images error\n");
    }

    const imagesResults: ImagesResults = await response.json();

    const parsedData = ImageWithPhotosSchema.parse(imagesResults);

    if (!parsedData.total_results) {
      return undefined;
    }

    return parsedData;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }
  }
};
