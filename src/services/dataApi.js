const url = 'https://random-words5.p.rapidapi.com/getRandom?wordLength=5';

const getDataFromApi = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9e65081bdbmsh505cd9b26b84be1p130db7jsn41121f85fbb4',
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const getWordFromJson = async () => {
  const response = await fetch(
    'https://silviaparadag.github.io/api-sp/words/wordlist.json'
  );
  return await response.json();
};

const objToExport = {
  getDataFromApi: getDataFromApi,
  getWordFromJson: getWordFromJson,
};

export default objToExport;
