const swaggerDocument =  require('swagger-jsdoc');


const options = {

    swaggerDefinition: {

        "swagger": "2.0",
        "info": {
            "title": "Novelty Api"
            
        },
        "host": "localhost:5000",
        "basePath": "/api/v1/",
        "tags": [
            {
                "name": "user",
                "description": "API for users in the system"
            },
          
        ],
        "schemes": [
            "http"
        ],
        "definitions": {
            "register": {
                "properties": {

                    "first_name": {
                        "type": "string"
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "user_password": {
                        "type": "string"
                    }
                }
            },
            "login":{
                "properties":{
                    "email":{
                        "type":"string"
                    },
                    "user_password":{
                        "type":"string"
                    }
                }
            }
        }
    },
    apis:['./Routes/*.js']
}




module.exports = swaggerDocument(options);