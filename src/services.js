import axios from "axios";

export const fetchPalettes = async () => {
  //acá declaramos el random en la misma función hexadecimal por eso el tostring16 y llamamos la urla con el con el random.
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  const result = await axios(
    `https://www.thecolorapi.com/scheme?format=json&count=6&scheme=analogic&hex=${randomHex}`
  );
  return result.data.colors;
};
