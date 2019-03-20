function getfile(file,callback){
  var obj=new XMLHttpRequest();
  obj.overrideMimeType("Application/json");
  obj.open('GET',file,true);
  obj.onreadystatechange=function(){
    if(obj.readyState===4 && obj.status=="200"){
      callback(obj.responseText);

    }
  }
  obj.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  inf(data.basics);
  inf1(data.career);
  inf2(data.education);
  inf3(data.skills);
})
var head=document.querySelector(".head");
var sub1=document.querySelector(".sub1");
var sub2=document.querySelector(".sub2");


function inf(info){
var image=document.createElement("img");
image.src=info.img;
sub1.appendChild(image);
head.appendChild(sub1);
var line=document.createElement("hr");
sub1.appendChild(line);
var name=document.createElement("h2");
name.textContent=info.NAME;
sub1.appendChild(name);
head.appendChild(sub1);
var mail=document.createElement("h2");
mail.textContent=info.Email;
sub1.appendChild(mail);
head.appendChild(sub1);
}
function inf1(info){
  var obj2=document.createElement("h1");
  obj2.textContent="Resume";
  sub2.appendChild(obj2);
  var line1=document.createElement("hr");
  sub2.appendChild(line1);
  var obj1=document.createElement("h2");
  obj1.textContent="Career Objective";
  sub2.appendChild(obj1);
  var obj=document.createElement("h3");
  obj.textContent=info.objective;
  sub2.appendChild(obj);
  head.appendChild(sub2);
  var line=document.createElement("hr");
  sub2.appendChild(line);
}
function inf2(info){
  var h2=document.createElement("h2");
  h2.textContent="Educational Details";
  sub2.appendChild(h2);
  head.appendChild(sub2);
  var tab=document.createElement("table");
  let row="";
  row +="<tr>"+"<th>"+"S.No"+"</th>"+
  "<th>"+"Institute"+"</th>"+
  "<th>"+"Degree"+"</th>"+
  "<th>"+"POY"+"</th>"+
  "</tr>";
  for(i in info){
  row +="<tr>"+"<td>"+info[i].SNo +"</td>"+
  "<td>"+info[i].Degree +"</td>"+
  "<td>"+info[i].Institute +"</td>"+
  "<td>"+info[i].POY +"</td>"+
  "</tr>";
  tab.innerHTML=row;
  sub2.appendChild(tab);
  }
  var line1=document.createElement("hr");
  sub2.appendChild(line1);

}
function inf3(info){
  var h2=document.createElement("h2");
  h2.textContent="Skills";
  sub2.appendChild(h2);
  head.appendChild(sub2);
  var ul=document.createElement(ul);
  sub2.appendChild(ul);
  for(i in info){
    var li=document.createElement("li");
    li.textContent=info[i].info;
    ul.appendChild(li);
  }
  var line1=document.createElement("hr");
  sub2.appendChild(line1);
}
