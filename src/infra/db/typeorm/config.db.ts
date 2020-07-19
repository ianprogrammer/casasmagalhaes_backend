import { DB_CONFIG } from '@/config';
import { create } from 'domain';
import "reflect-metadata";
import { getConnectionManager, getConnectionOptions, Connection, createConnection } from "typeorm";
import { Loja } from './entities/loja.entity';
import { Produto } from './entities/produto.entity'


// const connectionManager = getConnectionManager();

const connection = async (connectionName = "default"): Promise<Connection> => {
    // const connectionOptions = await getConnectionOptions(connectionName);


    // if (connectionManager.has("default")) {
    //     connection = connectionManager.get("default");
    // } else {
    //     connection = connectionManager.create({
    //         ...connectionOptions,
    //         entities: [Produto,Loja],
    //     });

    // }

    const connection = createConnection({
        name: "default",
        type: 'postgres',
        host: DB_CONFIG.host,
        port: +DB_CONFIG.port,
        username: DB_CONFIG.username,
        password: DB_CONFIG.password,
        database: DB_CONFIG.database,
        entities: [Produto, Loja],
        synchronize:true
    })

    return connection
};

export default connection;
