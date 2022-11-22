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
  try{
  console.log('PUT request to update jateDB');
  // Create connection
  const jateDb = await openDB('jate', 1);
  // new transaction 
  const tx = jateDb.transaction('jate', 'readwrite');
  // open object store
  const objStore = tx.objectStore('jate');
  // update
  const req = objStore.put({ jate: content })
  // confirmation
  const result = await request;
  console.log('🚀 - data updated', result); }
  catch(err) {
    console.log("awaiting content");
};
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  // Create a connection
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');
  // Open object store
  const store = tx.objectStore('jate');
  // get all
  const request = store.getAll();
  // confirmation
  const result = await request;
  console.log(result);
};

initdb();
