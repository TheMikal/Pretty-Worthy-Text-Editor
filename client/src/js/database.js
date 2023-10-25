import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("feed the db");

  // connects to the db and sets version
  const textDb = await openDB("jate", 1);

  // specify db and privileges 
  const tx = textDb.transaction("jate", "readwrite");

  // opens object store
  const store = tx.objectStore("jate");

  // content passed in
  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log("New data saved to the database, tight", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("getting the data");

  const textDb = await openDB("jate", 1);

  const tx = textDb.transaction("jate", "readonly");

  const store = tx.objectStore("jate");

  // grab stored data
  const request = store.get(1);

  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();
