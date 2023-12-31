export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const AVTAR_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/120px-Netflix-avatar.png?20201013161117";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const SUPPORTED_LANGUAGE = [
  {
    identifier:"english",
    name:"English"
  },
  {
    identifier:"hindi",
    name:"Hindi"
  },
  {
    identifier:"spanish",
    name:"Spanish"
  },
]


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
console.log("key",OPENAI_KEY);

