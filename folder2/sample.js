/*  ***Async and await***
console.log('person1 : shows ticket');
console.log('person2: shows ticket');

const preMovie = async() =>{

const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});


const getPopcorn = new Promise((resolve,reject) => resolve(` popcorn`));

const addButter = new Promise((resolve,reject) => resolve(`butter`));

const getColdDrinks = new Promise((resolve,reject) => resolve(`cold drinks`));


let ticket = await promiseWifeBringingTicks;

console.log('husband: i got some popcorn');
console.log('husband: we should go in');
console.log('wife: i need butter on my popcorn');

let popcorn = await getPopcorn;
 
console.log(`husband: i got some ${popcorn}`);
console.log('husband : we should go in');
console.log('wife: i need buttor on my popcorn');

let butter = await addButter;
console.log(`husband: i got some ${butter} on popcorn`);
console.log(`husband: anything else darling?`);
//console.log(`wife: lets go we are getting late`);
//console.log(`husband: thank you for the reminder a *grins*`);
console.log(`wife: get some cooldrings`);

let cooldrings = await getColdDrinks;
console.log(`husband: i got ${cooldrings} anything else? `);
console.log(`wife: lets go we are getting late`);
console.log(`husband: thank you for the reminder a *grins*`);



return ticket;

}

preMovie().then((m)=> console.log(`person : shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');

*/



/*  *** Promise.all ***
console.log('person1 : shows ticket');
console.log('person2: shows ticket');

const preMovie = async() =>{

const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});


const getPopcorn = new Promise((resolve,reject) => resolve(` popcorn`));

const addButter = new Promise((resolve,reject) => resolve(`butter`));

const getColdDrinks = new Promise((resolve,reject) => resolve(`cold drinks`));


let ticket = await promiseWifeBringingTicks;

let [popcorn,butter,cooldrings] = await Promise.all([getColdDrinks,addButter,getPopcorn]);

console.log(`${popcorn}, ${butter}, ${cooldrings}`);


return ticket;

}

preMovie().then((m)=> console.log(`person : shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');

*/
// Creating and deleting the posts

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
  
        if(len<0){
  
          posts.pop();
  
          resolve();
  
        }
  
        else{
  
          reject('Error: Something went wrong');
  
        }
  
      }, 1000);
  
    });
  
  }
  



  const myfun = async()=>{
 
    try
    {
        await createPost({title:'Post Three',body:'This is post three'});
        await deletePost();
        await deletePost();
        await deletePost();

    }

    catch(e)
    {
        console.log(e);
    }

 
  }
  myfun();
  getPosts();



  
  

   