const supertest = require("supertest")
const app = require('../app')
const request = supertest(app)


describe("entry point of the application", ()=>{

    it("receives GET request at /posts/:id/comments",()=>{
        request
        .get("posts/1/comments")
        .expect(200)
        .end((err,res)=>{
            done()
        })
    })

    it("receives POST request at /posts/:id/comments",(done)=>{
        request
        .post("posts/1/comments")
        .send({postId:"1", id:"6", email:"myemail@email.com", body:"new comment"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err,res)=>{
            if (err) return done(err);
            done()
        })
    })
})