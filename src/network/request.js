import axios from "axios"

export function request(config){

}

export function request2(config){
    const instance =axios.create({
        baseURL:'http://localhost:8445/api/login',
        timeout:5000
    });
    instance.defaults.withCredentials=false;
    return instance(config)

}