import axios from "axios";
export const findOffers = async (ctx) => {
  //const parser = new DOMParser();
  //const htmlDoc = parser.parseFromString(txt, 'text/html');
  // do whatever you want with htmlDoc.getElementsByTagName('a');
  const djinni = await axios.get(process.env.URL_DJINNI);
};
