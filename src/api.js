import { RxjsWrapper } from 'rxjs-ajax-wrapper';

const apiDefs = {
  getAllFilms: {
    url: 'https://ghibliapi.herokuapp.com/films',
    method: 'GET',
    responseType: 'json',
  },
  getFilm: {
    url: 'https://ghibliapi.herokuapp.com/films/:id',
    method: 'GET',
    responseType: 'json',
  },
  postRes: {
    url: 'localhost:8080/res',
    method: 'POST',
  },
};

const api = new RxjsWrapper(apiDefs);
api.addRequestMiddleware(() => ({ headers: { Authorization: 'Bearer mesfesses' } }));

export default api;