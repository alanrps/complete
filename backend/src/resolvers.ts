import ItemsDAO from './dao/items';
import { Item } from './types/types';
import { itemsDAO } from './container';

const items = [
    {
        id: 1,
        description: 'Filmes Assistidos',
        list: 'Filmes'
    },
    {
        id: 2,
        description: 'Jogos Finalizados',
        list: 'Jogos'
    },
    {
        id: 3,
        description: 'Tarefas a se realizar',
        list: 'Tarefas'
    },
  ];

const resolvers = {
    Query: {
      items: () => items,
      item: (_: any , { id }:any) => {
        const foundItem = items.find((item) => item.id == id);

        return foundItem;
      }
    },
    Mutation: {
        createItem: async (description: string, list: string) => {
          const item = await itemsDAO.insertItem({ description, list });
          console.log(item);

          return item;
        }
    }
  };

export { resolvers } ;