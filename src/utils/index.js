import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortItineraries = (itineraries) => {
    return itineraries
      .slice()
      .sort((a, b) =>
        compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
      );
  };