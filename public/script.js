// Create a function that tests the post route handler [2 pts]

const { json } = require("express/lib/response")

function testPost(){
    fetch("/create/potion",{
        method:"POST",
        headers:{

        },
      body:JSON.stringify({message:"hello"})
    })
}

// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

testPost()