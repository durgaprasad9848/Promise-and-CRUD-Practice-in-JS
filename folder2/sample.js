const posts = [



    {title: 'Post One', body : 'This is post one', CreatedAt: new Date().getTime() },
  
  
  
    {title: 'Post Two', body : 'This is post two',CreatedAt: new Date().getTime()}
  
  
  
  ];
  
  
  
  var intervalid =0;
  
  
  
  function getPosts(){
  
  
  
    clearInterval(intervalid);
  
  
  
    intervalid = setInterval(()=>{
  
  
  
      let output ='';
  
  
  
      for(let i=0;i<posts.length;i++){
  
  
  
        output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].CreatedAt)/1000} seconds ago </li>`;
  
  
  
      }
  
  
  
      document.body.innerHTML = output;
  
  
  
     
  
  
  
    },1000);
  
  
  
  }
  
  
  
  function createPost(post){
  
    return new Promise((resolve,reject)=>{
  
      setTimeout(() => {
  
        posts.push({...post, CreatedAt : new Date().getTime()});
  
  
  
        const error = false;
  
  
  
        if(!error){
  
          resolve();
  
        }
  
        else{
  
          reject('Error: Something went wrong');
  
        }
  
   
  
      }, 1000);
  
    });
  
  }
  
  
  
   function deletePost(){
  
    return new Promise((resolve,reject)=>{
  
      setTimeout(() => {
  
        
  
        const len = posts.length;
  
        
  
        if(len>0){
  
          posts.pop();
  
          resolve();
  
        }
  
        else{
  
          reject('Error: Something went wrong');
  
        }
  
        
  
      }, 1000);
  
     
  
    });
  
  }
  
  
  
  createPost({title:'Post Three',body:'This is post three'}).then(()=>{
  
    getPosts();
  
    deletePost().then(()=>{
  
      deletePost().then(()=>{
  
        deletePost().then(()=>{
  
          deletePost().then().catch(err => console.log(err))})
  
          .catch(err => console.log(err))})
  
        .catch(err => console.log(err))})
  
        .catch(err => console.log(err))});
  
  
  
  
  
  createPost({title:'Post Four',body:'This is post four'}).then(()=>{
  
  setTimeout(() => {
  
    deletePost()},1000)})