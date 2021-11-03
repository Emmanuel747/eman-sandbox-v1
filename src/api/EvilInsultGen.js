import axios from "axios";

const InsultURL = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;

//Request Insult from EvilInsultGenerator api
export async function getInsult() {
  try {
    const {data} = await axios.get(InsultURL);
    return data;
  } catch (err) {
    throw err;
  }
}