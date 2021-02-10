//async function..
async function fetchurl(url)
{
    try{
        let fetchres=await fetch(url);
let data=await fetchres.json();
return data;
}
catch(err) {
    console.log(err); // TypeError: failed to fetch
  }   
}

//through text search;
var data='';
function searchshow()
{

    var  code = document.querySelector('#input').value; 
    data=fetchurl('https://api.tvmaze.com/search/shows?q='+code);
    load();
}

// through date search
function searchshow1()
{
    var val=document.querySelector('#bydate').value;
    data=fetchurl('https://api.tvmaze.com/schedule/web?date='+val);
    date_load();
    console.log(val);
}

//load the content
function load()
{ 
    var row=document.querySelector('#row');
    row.innerText='';
    data.then((result)=>{
        console.log(result);
       
for(i=0;i<result.length;i++)
{
    var col_img=document.createElement('div');
    col_img.setAttribute('class','col-3 layout');
    var image=document.createElement('img');
    if(result[i].show.image!=null)
    {
        
    image.setAttribute('src',result[i].show.image.medium);
    image.setAttribute('alt',result[i].show.name);
    }
    col_img.appendChild(image);
    var desc=document.createElement('p');
    desc.innerHTML="Genere: "+result[i].show.genres.join(",")+"<br>"+"Premiered: "+result[i].show.premiered+"<br>Timings: "+result[i].show.schedule.time+"<br>"
                    +"Days: "+result[i].show.schedule.days
    if(result[i].show.network!=null)
    {
        var country=document.createElement('p');
       country.innerText="Streaming Country:"+result[i].show.network.country.name  
       col_img.appendChild(country);
    }
    col_img.appendChild(desc);
    row.append(col_img); 
}
 });

}

function date_load()
{ 
    var row=document.querySelector('#row');
    row.innerText='';
    data.then((result)=>{
        console.log(result);
       
for(i=0;i<result.length;i++)
{
    var col_img=document.createElement('div');
    col_img.setAttribute('class','col-3 layout');
    var image=document.createElement('img');
    if(result[i]._embedded.show.image!=null)
    {
        
    image.setAttribute('src',result[i]._embedded.show.image.medium);
    image.setAttribute('alt',result[i]._embedded.show.name);
    }
    col_img.appendChild(image);
    var desc=document.createElement('p');
    desc.innerHTML="Genere: "+result[i]._embedded.show.genres.join(",")+"<br>"+"Premiered: "+result[i]._embedded.show.premiered+"<br>Timings: "+
    result[i]._embedded.show.schedule.time+"<br>"+"Days: "+result[i]._embedded.show.schedule.days
    if(result[i]._embedded.show.network!=null)
    {
        var country=document.createElement('p');
       country.innerText="Streaming Country:"+result[i]._embedded.show.network.country.name  
       col_img.appendChild(country);
    }
    col_img.appendChild(desc);
    row.append(col_img); 
}
 });

}