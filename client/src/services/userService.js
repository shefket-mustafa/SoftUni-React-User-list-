const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
  async getAll() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const users = Object.values(result);
    return users;
  },
  async getOne(userId){
    const response = await fetch(`${baseUrl}/${userId}`);
    const user = await response.json();
    return user;
  },

  async create(userData){
    const {country, city, street, streetNumber, ...postData} = userData

    postData.createdAt = new Date().toISOString()
    postData.updatedAt = new Date().toISOString()
  
    postData.address = {country, city, street, streetNumber};

      const response = await fetch(baseUrl,{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(postData)
      });

      const result = await response.json();
      return result;
  },
  async delete(userId){
    const response = await fetch(`${baseUrl}/${userId}`, {
      method: 'DELETE',
    });
    const result = await response.json();

    return result;

  }
};
