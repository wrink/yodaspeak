// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yodish.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'yodish.p.rapidapi.com'
  }
})

export default async function handler(req, res) {
  console.log(process.env.NEXT_PUBLIC_RAPID_API_KEY);
  const { text } = req.query;
  if (typeof text !== 'string') {
    return res.status(400).send('No Text');
  }

  const { data } = await api.post('https://yodish.p.rapidapi.com/yoda.json', { text });

  return res.status(200).json({ text: data });
};
