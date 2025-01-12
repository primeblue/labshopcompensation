import {RESTDataSource} from 'apollo-datasource-rest';

class orderRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8082';
        // dev for IDE
            // this.baseURL = 'http://8082-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://order:8080';
    }


    stringToJson(str){
        if(typeof str == 'string'){
            str = JSON.parse(str);
        }
        return str;
    }
}

export default orderRestApi;




