import {RESTDataSource} from 'apollo-datasource-rest';

class inventoryRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8083';
        // dev for IDE
            // this.baseURL = 'http://8083-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://inventory:8080';
    }


    stringToJson(str){
        if(typeof str == 'string'){
            str = JSON.parse(str);
        }
        return str;
    }
}

export default inventoryRestApi;




