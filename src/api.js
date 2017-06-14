import RxjsWrapper from 'rxjs-ajax-wrapper';

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

// api.routes.getSingleRes({id: 2, otherId: 3}, JSON.stringify(truc), {category: 'lol', order_by: 'desc', square: [1, 2, 3]});

const api = new RxjsWrapper(apiDefs);
api.addRequestMiddleware(() => ({ headers: { Authorization: 'Bearer mesfesses' } }));

export default api;
