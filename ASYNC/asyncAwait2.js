function fetchPostData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Post Data Fetched")
        }, 2000)
    })
}

function fetchComment(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("comment data fetched");    
        }, 3000)
    })
}


// async function getBlogData(){
//     try{
//         console.log("Fetching blog data...");
//         const blogData = await fetchPostData();
//         const commentData = await fetchComment();
//         console.log("Fetch Complete");
//         console.log(blogData);
//         console.log(commentData);
//     }catch(error){
//         console.log("Error fetching blog data", error);
        
//     }
// }

// using promise all
async function getBlogData(){
    try {
        console.log("Fetching Data..");
       let [postData, commentData] = await Promise.all([fetchPostData(),
            fetchComment()
        ])

        console.log(postData);
        console.log(commentData);
        
        
        
        
    } catch (error) {
        console.log("Error fetching blog data", error);

    }
}
getBlogData();