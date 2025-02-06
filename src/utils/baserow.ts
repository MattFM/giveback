import fetch from 'node-fetch';

const BASEROW_API_KEY = import.meta.env.BASEROW_API_KEY;
const BASEROW_TABLE_ID = import.meta.env.BASEROW_TABLE_ID;

export async function fetchBaserowData() {
  const response = await fetch(`https://api.baserow.io/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true`, {
    headers: {
      'Authorization': `Token ${BASEROW_API_KEY}`
    }
  });
  const data = await response.json();
  return data.results;
}