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
    col_img.setAttribute('class','offset-2 col-4');
    var image=document.createElement('img');
    if(result[i].show.image!=null)
    {
        
    image.setAttribute('src',result[i].show.image.medium);
    image.setAttribute('alt',result[i].show.name);
    image.setAttribute('class',"img-thumbnail");
    image.setAttribute('width','300');
    image.setAttribute('height','200');
    }
    col_img.appendChild(image);

    var col_desc=document.createElement('div');
    col_desc.setAttribute('class','col-6 layout');

    var genre=document.createElement('p');
    genre.innerText="Genere: "+result[i].show.genres.join(",")
    var premiere=document.createElement('p');
    premiere.innerText="Premiered: "+result[i].show.premiered;
    if(result[i].show.network!=null)
    {
        var country=document.createElement('p');
       country.innerText="Streaming Country:"+result[i].show.network.country.name  
    }
    var timing=document.createElement('p');
    timing.innerText="Timings: "+result[i].show.schedule.time;
    var days=document.createElement('p');
    days.innerText="Days: "+result[i].show.schedule.days;
    col_desc.append(genre,premiere,country,timing,days) 
    row.append(col_img,col_desc); 
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
    col_img.setAttribute('class','offset-2 col-4');
    var image=document.createElement('img');
    if(result[i]._embedded.show.image!=null)
    {
       
    image.setAttribute('src',result[i]._embedded.show.image.medium);
    image.setAttribute('alt',result[i]._embedded.show.name);
    image.setAttribute('class',"img-thumbnail");
    image.setAttribute('width','300');
    image.setAttribute('height','200');
    }
    col_img.appendChild(image);

    var col_desc=document.createElement('div');
    col_desc.setAttribute('class','col-6 layout');

    var genre=document.createElement('p');
    genre.innerText="Genere: "+result[i]._embedded.show.genres.join(",")
    var premiere=document.createElement('p');
    premiere.innerText="Premiered: "+result[i]._embedded.show.premiered;
    if(result[i]._embedded.show.network!=null)
    {
        var country=document.createElement('p');
       country.innerText="Streaming Country:"+result[i]._embedded.show.network.country.name  
    }
    var timing=document.createElement('p');
    timing.innerText="Timings: "+result[i]._embedded.show.schedule.time;
    var days=document.createElement('p');
    days.innerText="Days: "+result[i]._embedded.show.schedule.days;
    col_desc.append(genre,premiere,country,timing,days) 
    row.append(col_img,col_desc); 
}
 });

}