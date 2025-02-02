export interface MoviesData {
  id: number;
  title: string;
  genre: string;
  rating: number;
  description: string;
  poster: string;
  releaseDate: string;
  director: string;
  information: string;
  trailer: string;
}

const movies = [
  {
    id: Math.random(),
    title: "RRR",
    genre: "Action",
    rating: 9.9,
    description:
      "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
    poster: "image_1.svg",
    releaseDate: "Release date - 2010-07-16",
    director: "Director : S.S. Rajamouli",
    information:
      "RRR was considered one of the ten best films of the year by the National Board of Review, making it only the seventh non-English language film ever to make it to the list.[14] The song  won the Oscar for Best Original Song at the 95th Academy Awards",
    trailer: "https://www.youtube.com/watch?v=AVVO3Yat_Bw",
  },
  {
    id: Math.random(),
    title: "Varisu",
    genre: "Fiction",
    rating: 8.8,
    description:
      "It centers around two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao)",
    poster: "image_2.svg",
    releaseDate: "Release date - 2019-09-16",
    director: "Director : S.S. Rajamouli",
    information:
      "RRR was considered one of the ten best films of the year by the National Board of Review, making it only the seventh non-English language film ever to make it to the list.[14] The song  won the Oscar for Best Original Song at the 95th Academy Awards",
    trailer: "https://www.youtube.com/watch?v=GBt2uYRXXTg",
  },
  {
    id: Math.random(),
    title: "Avengers",
    genre: "Action",
    rating: 9.7,
    description:
      "It centers around two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao)",
    poster: "image_3.svg",
    releaseDate: "Release date - 2010-07-16",
    director: "Director : S.S. Rajamouli",
    information:
      "RRR was considered one of the ten best films of the year by the National Board of Review, making it only the seventh non-English language film ever to make it to the list.[14] The song  won the Oscar for Best Original Song at the 95th Academy Awards",
    trailer: "https://www.youtube.com/watch?v=AVVO3Yat_Bw",
  },
  {
    id: Math.random(),
    title: "Master",
    genre: "Golden Globe Winner",
    year: 2000,
    rating: 9.1,
    description:
      "It centers around two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao)",
    poster: "image_4.svg",
    releaseDate: "Release date - 2010-07-16",
    director: "Director : S.S. Rajamouli",
    information:
      "RRR was considered one of the ten best films of the year by the National Board of Review, making it only the seventh non-English language film ever to make it to the list.[14] The song  won the Oscar for Best Original Song at the 95th Academy Awards",
    trailer: "https://www.youtube.com/watch?v=AVVO3Yat_Bw",
  },
  {
    id: Math.random(),
    title: "Joker",
    genre: "Fiction",
    rating: 9.4,
    description:
      "It centers around two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao)",
    poster: "image_5.svg",
    releaseDate: "Release date - 2010-07-16",
    director: "Director : S.S. Rajamouli",
    information:
      "RRR was considered one of the ten best films of the year by the National Board of Review, making it only the seventh non-English language film ever to make it to the list.[14] The song  won the Oscar for Best Original Song at the 95th Academy Awards",
    trailer: "https://www.youtube.com/watch?v=AVVO3Yat_Bw",
  },
  {
    id: Math.random(),
    title: "Avatar",
    genre: "Action",
    rating: 9.9,
    description:
      "It centers around two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao)",
    poster: "image_6.svg",
    releaseDate: "Release date - 2010-07-16",
    director: "Director : S.S. Rajamouli",
    information:
      "RRR was considered one of the ten best films of the year by the National Board of Review, making it only the seventh non-English language film ever to make it to the list.[14] The song  won the Oscar for Best Original Song at the 95th Academy Awards",
    trailer: "https://www.youtube.com/watch?v=AVVO3Yat_Bw",
  },
  {
    id: Math.random(),
    title: "Broker",
    genre: "Fiction",
    rating: 7.2,
    description:
      "It centers around two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao)",
    poster: "image_7.svg",
    releaseDate: "Release date - 2010-07-16",
    director: "Director : S.S. Rajamouli",
    information:
      "RRR was considered one of the ten best films of the year by the National Board of Review, making it only the seventh non-English language film ever to make it to the list.[14] The song  won the Oscar for Best Original Song at the 95th Academy Awards",
    trailer: "https://www.youtube.com/watch?v=AVVO3Yat_Bw",
  },
];

export default movies;
