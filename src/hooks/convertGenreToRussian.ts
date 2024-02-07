export const convertGenreToRussian = (genre: string): string => {
  switch (genre) {
    case "Comedy":
      return "комедия";
    case "Action":
      return "боевик";
    case "Horror":
      return "ужасы";
    case "Thriller":
      return "триллер";
    case "Adventure":
      return "приключения";
    case "Drama":
      return "драма";
    case "Crime":
      return "криминал";
    case "Fantasy":
      return "фэнтези";
    case "War":
      return "военный";
    case "Documentary":
      return "документальный";
    case "Musical":
      return "музыкальный";
    case "Sci-fi":
      return "научная фантастика";
    case "Post-Apocalyptic":
      return "постапокалиптика";
    default:
      return genre;
  }
};
