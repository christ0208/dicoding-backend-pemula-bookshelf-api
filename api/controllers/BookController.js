import BookStoreRules from '../rules/BookStoreRules';
import BookUpdateRules from '../rules/BookUpdateRules';
import BookService from '../services/BookService';

/**
 * Handler for display all resources and filters by name, finished, and read books if specified.
 *
 * @param request
 * @param h
 * @returns {Promise<*>}
 */
const index = async (request, h) => {
  const books = await BookService.handleIndex(request.query);
  if (books instanceof Error) {
    return h.response({
      status: 'error',
      message: books.message,
    }).code(500);
  }

  return h.response({
    status: 'success',
    data: {
      books,
    },
  }).code(200);
};

/**
 * Handler for display specific book by ID.
 *
 * @param request
 * @param h
 * @returns {Promise<*>}
 */
const show = async (request, h) => {
  const book = await BookService.handleShow(request.params.bookId);
  if (book instanceof Error) {
    return h.response({
      status: 'fail',
      message: book.message,
    }).code(404);
  }

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    data: {
      book,
    },
  }).code(200);
};

/**
 * Handler for store new resource.
 *
 * @param request
 * @param h
 * @returns {Promise<*>}
 */
const store = async (request, h) => {
  if (!BookStoreRules.validateName(request.payload)) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  if (!BookStoreRules.validateReadPage(request.payload)) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const book = await BookService.handleStore(request.payload);
  if (book instanceof Error) {
    return h.response({
      status: 'error',
      message: book.message,
    }).code(500);
  }

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: book.id,
    },
  }).code(201);
};

/**
 * Handler for update existing resource by ID.
 *
 * @param request
 * @param h
 * @returns {Promise<*>}
 */
const update = async (request, h) => {
  if (!BookUpdateRules.validateName(request.payload)) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

  if (!BookUpdateRules.validateReadPage(request.payload)) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const book = await BookService.handleUpdate(request.params.bookId, request.payload);
  if (book instanceof Error) {
    return h.response({
      status: 'fail',
      message: book.message,
    }).code(404);
  }

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  }).code(200);
};

/**
 * Handler for delete existing resource by ID.
 *
 * @param request
 * @param h
 * @returns {Promise<*>}
 */
const destroy = async (request, h) => {
  const book = await BookService.handleDestroy(request.params.bookId);
  if (book instanceof Error) {
    return h.response({
      status: 'fail',
      message: book.message,
    }).code(404);
  }

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  }).code(200);
};

export default {
  index,
  show,
  store,
  update,
  destroy,
};
