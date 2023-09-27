import { ImagesResults } from "@/models/images";

export const getPageNumber = (url: string) =>
  new URL(url).searchParams.get("page");

export const getPrevNextPage = (images: ImagesResults) => {
  let nextPage = images?.next_page ? getPageNumber(images.next_page) : null;
  const prevPage = images?.prev_page ? getPageNumber(images.prev_page) : null;

  const totalPages =
    images.total_results % images.per_page
      ? Math.ceil(images.total_results / images.per_page)
      : images.total_results / images.per_page + 1;

  if (prevPage && parseInt(prevPage) + 4 < totalPages) {
    nextPage = (parseInt(prevPage) + 4).toString();
  } else if (prevPage && parseInt(prevPage) < totalPages - 1) {
    nextPage = (
      parseInt(prevPage) +
      (totalPages - parseInt(prevPage))
    ).toString();
  } else {
    nextPage = null;
  }

  return {
    prevPage,
    nextPage,
  };
};
