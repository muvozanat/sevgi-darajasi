let info__1 = document.querySelector('#info__1'),
info__2 = document.querySelector('#info__2'),
izlash = document.querySelector('.izlash'),
info1 = document.querySelector('.info1');

izlash.addEventListener('click',()=>{
fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${info__2.value}&fname=${info__1.value}`,
{
method: "GET",
headers: {
"x-rapidapi-host": "love-calculator.p.rapidapi.com",
"x-rapidapi-key":
  "b802ef34a1msh625ade2256a7066p1dab06jsna5c8bad5b6d9",
},
}
)
.then((response) => response.json())
.then((data) => {info1.innerHTML =`sevish darajasi: `+ data.percentage+" %"+`<br>` + data.result
console.log(data)} )
.catch((err) => {
console.error(err);
});
})
