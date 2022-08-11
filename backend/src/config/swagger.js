import swaggerDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    info : { // 정보 작성
        title : "dotion-server",
        version : "1.0.0",
        description : "dotion-server API DOCs" 
    },
    host : process.env.HOST, // base-url
    basePath : "/" // base path
};

const options = {
    swaggerDefinition: swaggerDefinition,
    apis : [__dirname + '/../routes/*.js']
};

export default swaggerDoc(options);