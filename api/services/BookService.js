import { nanoid } from 'nanoid';
import BookRepository from '../repositories/BookRepository';

/**
 * Handler for reusable index method in controller.
 *
 * @param query
 * @returns {Promise<Error|*>}
 */
const handleIndex = async (query) => BookRepository.getAll(query);

/**
 * Handler for reusable show method in controller.
 *
 * @param id
 * @returns {Promise<Error|*>}
 */
const handleShow = async (id) => BookRepository.get(id);

/**
 * Handler for reusable store method in controller.
 *
 * @param payload
 * @returns {Promise<Error|*>}
 */
const handleStore = async (payload) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = payload;
  const data = {
    id: nanoid(),
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished: readPage === pageCount,
    reading,
  };

  return BookRepository.insert(data);
};

/**
 * Handler for reusable update method in controller.
 *
 * @param id
 * @param payload
 * @returns {Promise<Error|*>}
 */
const handleUpdate = async (id, payload) => {
  const book = await BookRepository.get(id);
  if (book instanceof Error) {
    return new Error('Gagal memperbarui buku. Id tidak ditemukan');
  }

  if (!book) {
    return new Error('Gagal memperbarui buku. Id tidak ditemukan');
  }

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = payload;
  const data = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished: readPage === pageCount,
    reading,
  };

  return BookRepository.update(id, data);
};

/**
 * Handler for reusable destroy method in controller.
 *
 * @param id
 * @returns {Promise<Error|*>}
 */
const handleDestroy = async (id) => BookRepository.remove(id);

export default {
  handleIndex,
  handleShow,
  handleStore,
  handleUpdate,
  handleDestroy,
};
