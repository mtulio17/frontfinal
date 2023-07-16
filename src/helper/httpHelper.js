export const httpHelper = () => {
    const customfetch = (endponint, options)=> {
        const defaultHeader = {
            accept: "aplication/json"
        }
        const controller = new AbortController();

        options.signal = controller.signal;
        options.method = options.method || "get";
        options.header = options.header ? {...defaultHeader, ...options.headers} : defaultHeader;
        options.body = JSON.stringify(options.body) || false;
        if(!options.body){
            delete options.body;
        }
        setTimeout(()=>{controller.abort()}, 3000);
        return fetch(endponint, options).then(res => res.ok ? res.json() : Promise.reject({
            err:true,
            status:res.status || "00",
            statusText:res.statusText || "Ocurrio un error",
        })).catch((err => err));
    }
    const get = (url, options = {}) => customfetch(url, options)

    const post = (url, options = {}) => {
        options.method = "post"
        customfetch(url, options)
    }

    const put = (url, options = {}) => {
        options.method = "put"
        customfetch(url, options)
    }

    const del = (url, options = {}) => {
        options.method = "delete"
        customfetch(url, options)
    }

    return{
        get,
        post,
        put,
        del
    }
}