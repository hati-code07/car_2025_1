const { MongoClient } = require('mongodb');
var data = require("./data.js").data;
console.log(data)

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'car2025';

async function main() {
  try {

    // Подключение к серверу
    await client.connect();
    console.log('Connected successfully to server');
    
    const db = client.db(dbName);
    const collection = db.collection('cars');

    // Вставка документов
    const insertResult = await collection.insertMany(data);
    console.log('Inserted documents =>', insertResult);
    

    // Чтение для проверки
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

//Запуск с правильной обработкой
main()
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Failed:', error))
  .finally(async () => {
    await client.close();
    console.log('Connection closed');
  });