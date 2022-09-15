 const helpers={
    swaggerSpec:{
        swaggerDefinition:{
        openapi:"3.0.0",
        info:{
          title: "Atenea API Documentation",
          version:"1.0.0",
        },
        servers:[
          {
            url: `http://localhost:4000`
          }
        ],
      },
      apis:["../V1/routes/*.js"]
      },

}

module.export = {helpers}