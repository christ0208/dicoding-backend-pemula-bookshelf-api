import HomeController from '../api/controllers/HomeController';
import BookController from '../api/controllers/BookController';

/**
 * Specifies handler for each route endpoints.
 *
 * @type {({path: string, handler: (function(): *), method: string}|
 * {path: string, handler: index, method: string}|
 * {path: string, handler: show, method: string}|
 * {path: string, handler: store, method: string}|
 * {path: string, handler: update, method: string})[]}
 */
const routes = [
  {
    method: 'GET',
    path: '/',
    handler: HomeController.index,
  },
  {
    method: 'GET',
    path: '/books',
    handler: BookController.index,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: BookController.show,
  },
  {
    method: 'POST',
    path: '/books',
    handler: BookController.store,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: BookController.update,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: BookController.destroy,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: HomeController.notFound,
  },
];

export default routes;
