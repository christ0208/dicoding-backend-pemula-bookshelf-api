import sequelize from 'sequelize';
import Book from '../models/Book';

const { Op } = sequelize;

/**
 * Get all data from database and filter by name, finished, or read if specified.
 *
 * @param query
 * @returns {Promise<Book[]|Error>}
 */
const getAll = async (query) => {
  if (Object.prototype.hasOwnProperty.call(query, 'name')) {
    query.name = {
      [Op.like]: `%${query.name}%`,
    };
  }

  let books;
  try {
    books = await Book.findAll({
      attributes: ['id', 'name', 'publisher'],
      where: query,
    });
  } catch (error) {
    return new Error('Buku gagal ditemukan');
  }

  return books;
};

/**
 * Get specific data by ID.
 *
 * @param id
 * @returns {Promise<Error|Book>}
 */
const get = async (id) => {
  let book;
  try {
    book = await Book.findOne({
      where: {
        id,
      },
    });
  } catch (error) {
    return new Error('Buku gagal ditemukan');
  }

  return book;
};

/**
 * Insert new data.
 *
 * @param data
 * @returns {Promise<Error|Book>}
 */
const insert = async (data) => {
  let book;

  try {
    book = await Book.create(data);
  } catch (error) {
    return new Error('Buku gagal ditambahkan');
  }

  return book;
};

/**
 * Update existing data.
 *
 * @param id
 * @param data
 * @returns {Promise<Error|[number, Book[]]>}
 */
const update = async (id, data) => {
  let book;

  try {
    book = await Book.update(data, {
      where: {
        id,
      },
    });
  } catch (error) {
    return new Error('Gagal memperbarui buku. Id tidak ditemukan');
  }

  return book;
};

/**
 * Delete existing data.
 *
 * @param id
 * @returns {Promise<Error|number>}
 */
const remove = async (id) => {
  let book;

  try {
    book = await Book.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    return new Error('Buku gagal dihapus. Id tidak ditemukan');
  }

  return book;
};

export default {
  getAll,
  get,
  insert,
  update,
  remove,
};
