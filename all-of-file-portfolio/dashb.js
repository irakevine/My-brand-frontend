const navimg = (x)=>{
    document.getElementById(x).classList.toggle("hide")
}

const mypic=()=>{
    const myimg_input=document.getElementById('blogimgs').files[0];
    const myimg=document.getElementById('imgname')
    const reader=new FileReader();
    reader.readAsDataURL(myimg_input);
    reader.addEventListener('load',function(){
        myimg.src=reader.result
    })
}


allblogs=[]
     function insertBlog(){

        let myObject = {};
        myObject.query_blogName= document.getElementById('blogname').value
        myObject.query_blogInf = document.getElementById('bloginf').value
        myObject.query_blogImgs = document.getElementById('imgname').src
        if(localStorage.getItem('blogList')){
         allblogs=JSON.parse(localStorage.getItem("blogList"))
 
        }
        allblogs.push(myObject)
        localStorage.setItem("blogList",JSON.stringify(allblogs))
        console.log(myObject)
     }
     
    //  localStorage.removeItem('blogList')
function displayBlog(){

    allblogs=JSON.parse(localStorage.getItem("blogList"))
    
         if (localStorage.getItem("blogList")==null){
            allblogs= [];
         }else{
            allblogs=JSON.parse(localStorage.getItem("blogList"))  
         }
         
         allblogs.forEach(function (k,index){
          document.getElementById('allblog').innerHTML+=`
          <div class="singleBlog"> 
          <div class="imgBlog">
           <div class="imgBlog_1"><img src="${k.query_blogImgs}" alt=""></div>
          </div>
          <div class="blog_details">
              <div class="BlogTittle">
               <div><p> <b>${k.query_blogName}</b></p></div>

              </div>
              <div class="Blogcontent">
               <div>
                   <p>${k.query_blogInf}</p>
               </div>
              </div>
              <div class="BlogButton">
               <div class="deletebutton">
                    <button> <a href="">Delete Item</a></button>
               </div>
               <div class="editbutton">
                   <button><a href=""> Edit</a></button>  
               </div>
              
              </div>
          </div>
       </div> `  
         });
}

displayBlog()
