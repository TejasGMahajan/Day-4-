const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send()


request.onload=function()
{ 
    if (request.status==200)
    {
let c=JSON.parse(request.responseText)

c.map((m)=>{
console.log(m.name)
console.log(m.region)
console.log(m.subregion)
console.log(m.population)
})
}else   
{
request.onerror=function()
{
    console.log("site is error")
}}}