import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Verificar se a variável de ambiente DATABASE_URL está definida
const uri = process.env.DATABASE_URL;

if (!uri) {
    console.error('DATABASE_URL não está definida no arquivo .env');
    process.exit(1); // Sai do processo se a variável não estiver definida
}

const client = new MongoClient(uri); // Inicializando o MongoClient com a URI garantida como string

async function testConnection() {
    try {
        // Conectar ao MongoDB
        await client.connect();
        console.log('Conectado ao MongoDB com sucesso!');

        // Listar databases para confirmar a conexão
        const databasesList = await client.db().admin().listDatabases();
        console.log("Databases disponíveis:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    } finally {
        // Fechar a conexão
        await client.close();
    }
}

// Executar o teste de conexão
testConnection();
