import axios from "axios";

export const fetchPalettes = async () => {
  //acá declaramos el random en la misma función hexadecimal por eso el tostring16 y llamamos la urla con el con el random.
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  const result = await axios(
    `https://www.thecolorapi.com/scheme?format=json&count=6&scheme=analogic&hex=${randomHex}`
  );
  return result.data.colors;
};

//seteo de imagenes en Inspiration Page
export const fetchImages = async () => {
  //axios.create crea un llamado con la key
  const unsplashClient = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
      Authorization: "Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc",
    },
  });

  try {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const result = await unsplashClient.get(
      `/search/photos?query=interior+color&per_page=10&page=${randomPage}`
    );
    return result.data.results;
  } catch (error) {
    console.error(error);
  }
  //en esta constante vamos a hacer el llamado de las imágenes decorativas que salen en inspiration.
};
