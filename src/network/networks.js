import {request2}  from "./request"


export function loginAxios(config){
return request2({
url:"/index",
params:config
})
}