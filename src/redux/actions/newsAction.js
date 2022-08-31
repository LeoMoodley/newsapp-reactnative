export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const fetchArticles = () => {
  return async (dispatch) => {
    // We can add logic to fetch data via the fetch API
    // This is asynchranous action, where the await will be completed before calling the dispatch function
    const result = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=14ba7cd814604fbfbbac85f0344c5ff3"
    );

    // This converts the data from the internet into JSON format
    const resultData = await result.json();

    // Then we call the dispatch function, and pass in the resultData as a payload
    dispatch({
      type: FETCH_ARTICLES,
      payload: resultData,
    });
  };
};

export const toggleFavorites = (url) => {
  return {
    type: TOGGLE_FAVORITES,
    payload: url,
  };
};
