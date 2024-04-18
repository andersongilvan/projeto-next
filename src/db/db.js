import mongoose from 'mongoose';

async function connect() {
    mongoose.connect(process.env.DB_CONNECT)
    return mongoose.connection
}
export default connect

/*
async function connect() {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log('Conexão feita com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    }
}

export default connect;
*/