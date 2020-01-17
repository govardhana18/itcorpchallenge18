import axios from 'axios';

/**
 * Here common axios function executes
 * 
 * @param {*} url 
 * @param {*} config 
 * @param {*} callback 
 */

function getData(url, config, callback) {
    axios.get(url, config)
    .then(res => {
        if(callback != null){
            callback(res);
        } else {
            console.log(res, "check log");    
        }
    })
    .catch(err => {
        console.log(err, "check log");
        return err;
    })
}

export default getData;