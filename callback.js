
const posts =[
    {title:'post one ', body: 'this is post one'},
    {title:'post two', body: 'tihs is post two'}
];
function getPost(){
    setTimeout(()=>{
let output ='';
posts.forEach((post,index)=>{
 output += `<li> ${post.title}</li>`
});

document.body.innerHTML = output;
    },1000);
}

createPost =(post, callback)=>{

    setTimeout(()=>{
posts.push(post);
callback();
    },2000);
}
createPost({title:"post three", body:'this is post three'},
getPost());