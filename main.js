// function getfile(file,callback){
// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange = function()
// {
//   if(xhr.readyState === 4 && xhr.status == "200"){
//     callback(xhr.responseText);
//   }
// };
//    xhr.send(null);
// }
// getfile("g.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.CareerObjective);
//   educate(data.education);
//   talent(data.skills);
// })

function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else {

          reject(new Error("error"));
        }
      })
    })
    }
    var newfile = loadjson("g.json");
    newfile.then(data=>{
      details(data.basics);
      career(data.CareerObjective);
      educate(data.education);
      talent(data.skills);
      ach(data.achievements);
    })


var child=document.querySelector(".childone");
function details(det){
var img = document.createElement("img");
img.src =det.image;
child.appendChild(img);

var name = document.createElement("h2");
name.textContent = det.name;
child.appendChild(name);

var no = document.createElement("h2");
no.textContent = det.phoneno;
child.appendChild(no);

var mail = document.createElement("mail");
mail.href = "mailto:sarwari1967@gmail.com";
mail.textContent = det.email;
child.appendChild(mail);

var a = document.createElement("h2");
a.textContent = ("address");
child.appendChild(a);

var hr=document.createElement("hr");
child.appendChild(hr);

var add = document.createElement("h2");
add.textContent = det.address;
child.appendChild(add);

}
var child1 = document.querySelector(".childtwo");
function career(careerinfo){

var ch= document.createElement("h2");
ch.textContent=("CAREER OBJECTIVE");
child1.appendChild(ch);

 var hr= document.createElement("hr");
 child1.appendChild(hr);


var b = document.createElement("p");
b.textContent = careerinfo.Info;
child1.appendChild(b);
}
function educate(edu){

  var lh = document.createElement("h2");
  lh.textContent = ("EDUCATIONAL QUALIFICATION");
  child1.appendChild(lh);

 var hr = document.createElement("hr");
 child1.appendChild(hr);

  for(i=0;i<edu.length;i++){
  var deg= document.createElement("h3");
  deg.textContent = edu[i].degree;
  child1.appendChild(deg);

 var eduul=document.createElement("ul");
 var eduli=document.createElement("li");
 eduli.textContent=edu[i].institute;
 eduul.appendChild(eduli);
 child1.appendChild(eduul);

 var eduul=document.createElement("ul");
 var eduli=document.createElement("li");
 eduli.textContent=edu[i].date;
 eduul.appendChild(eduli);
 child1.appendChild(eduul);
}
}
function talent(skl){
  var lk = document.createElement("h2");
  lk.textContent = ("TECHNICAL SKILLS");
  child1.appendChild(lk);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

var skdata = document.createElement("table");
skdata.border="3";
child1.appendChild(skdata);

 tabledata="";
 for(i=0;i<skl.length;i++){
   tabledata+="<tr><td>"+skl[i].title+"</td><td>"+skl[i].data+"</td></tr>";
 }
 skdata.innerHTML=tabledata;
}
function ach(achm){
  var lp = document.createElement("h2");
  lp.textContent = ("ACHIEVEMENTS in the year 2018");
  child1.appendChild(lp);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  for(i=0;i<achm.length;i++)
  {
  var dg= document.createElement("ul");
  dg.textContent = achm[i].competition;
  child1.appendChild(dg);
}

}
