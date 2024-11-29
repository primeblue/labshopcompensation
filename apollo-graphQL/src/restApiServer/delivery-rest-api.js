import {RESTDataSource} from 'apollo-datasource-rest';

class deliveryRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8084';
        // dev for IDE
            // this.baseURL = 'http://8084-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://delivery:8080';
    }


    stringToJson(str){
        if(typeof str == 'string'){
            str = JSON.parse(str);
        }
        return str;
    }
}

export default deliveryRestApi;




