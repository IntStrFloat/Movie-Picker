export interface Users {
  participants: Participants[];
}

export interface Movies {
  id: number;
  name: string;
  enName: string;
  year: number;
  description: string;
  rating: Rating;
  ageRating: number;
  poster: Poster;
  genres: Genre[];
  countries: Country[];
}
interface Country {
  name: string;
}
interface Genre {
  name: string;
}

interface Poster {
  url: string;
}
interface Rating {
  kp: number;
  imdb: number;
}

export interface Film {
  title: string;
  img: string;
}
interface Participants {
  userName: string;
  isAdmin: boolean;
}
export interface CreateRoomRequestProps {
  participants: Participants[];
  roomId: string;
}
export interface GetMoviesRequest {
  genres: string[];
  years: string[];
}
