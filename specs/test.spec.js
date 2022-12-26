const { sendRequest } = require("../helpers/api.helper.js");
const { expect } = require("chai");
const { testData } = require("../config/data.json");



 describe('API Test Suite', () => {
    
  
    
  it('GET post/1', async () => {
      const response = await sendRequest("posts/1");
      expect (response.data.userId).to.equal(1);
      expect(response.status).to.equal(200);
      
      
      
    });
    it('GET all posts and verify user 1 has 10 posts', async () => {
      const response = await sendRequest("posts");
      expect(response.status).to.equal(200);
      
      const filteredResponse = response.data.filter(post => post.userId == 1);

      expect(filteredResponse.length).to.equal(10);
      
    });
    


    it('PUT post/1', async () => {
      const response = await sendRequest("posts/1", testData, "put");
      expect(response.status).to.equal(200);
      
      
    });
    it('POST posts', async () => {
      const response = await sendRequest("posts", testData, "post");
      expect(response.status).to.equal(201);
            
    });

    it('DELETE post/1', async () => {
      const response = await sendRequest("posts/1", "delete");
      expect(response.status).to.equal(200);
      
      
      
    }); 

    it('DELETE non-existing post', async () => {
      const response = await sendRequest("posts/1000000", "delete");
      expect(response.status).to.equal(404);
      
      
      
    }); 
    
     


    
    
    })
