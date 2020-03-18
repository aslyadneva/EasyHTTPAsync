class EasyHTTP { 


  async get(url) {
    const response = await fetch(url); //returns Response Object
    const resData = await response.json(); //.json is called on the Response obj to parse the json into javascript 
    return resData // resData is the parsed js data structure 
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData
  }

  async put(url, data) {
    const response = await fetch (url, {
        method: 'PUT', 
        headers: {
          'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data)
      });
    const resData = await response.json(); 
    return resData   
  }

  async delete(url) {
    const response = await fetch (url, {
        method: 'DELETE', 
        headers: {
          'Content-type': 'application/json'
        }
      }); 
    
    const resData = await 'Resource deleted'; 
    return resData    
  }

}