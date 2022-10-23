import ItemsDAO from './dao/items';
import UsersDAO from './dao/users';

const itemsDAO = new ItemsDAO();
const usersDAO = new UsersDAO();

export {
    itemsDAO,
    usersDAO
};