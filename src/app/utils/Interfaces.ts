export interface IResult {
  backdrop_path: string
  id: number
  title?: string
  original_title?: string
  overview: string
  poster_path: string
  media_type: string
  adult: boolean
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date?: string
  video?: boolean
  vote_average: number
  vote_count: number
  name?: string
  original_name?: string
  first_air_date?: string
  origin_country?: string[]
}
export interface ITrendingResponse {
  page: number
  results: IResult[]
  total_pages: number
  total_results: number
}
export interface ITrendingPeopleResponse {
  page: number
  results: IPerson[]
  total_pages: number
  total_results: number
  required?: boolean
}

export interface IPerson {
  adult: boolean
  gender: number
  id: number
  known_for_department :string
  media_type :string
  name:string
  original_name:string
  popularity:number
  profile_path:string
}

export interface IMovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number
  genres: IGenre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompany[]
  production_countries: IProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IGenre {
  id: number
  name: string
}

export interface IProductionCompany {
  id: number
  logo_path?: string
  name: string
  origin_country: string
}

export interface IProductionCountry {
  iso_3166_1: string
  name: string
}

export interface ISpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}
