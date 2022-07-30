(()=>{"use strict";class e{static Description(){const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("h1"),n=document.createElement("h3"),s=document.createElement("p"),c=document.createElement("p"),d=document.createElement("p");a.innerText="Welcome to the Jade Peacock",n.innerText="Where Love can be tasted",s.innerText="At the Jade Peacock, our mission is to recreate Indian cuisine far away from home. Our lucid, light and dynamic kitchen aims to create meals that restore, challenge and enrich all your senses.",c.innerText="We are constantly searching for the unique aromas and flavors of India. By using freshly sourced ingredients and tirelessly perfecting our craft, we aim to represent the best of our country's harvest, heritage and love in one plate.",d.innerText="Come join us at the Jade Peacock, to share our passion for delicious food and experience the very best that India has to offer.",t.appendChild(a),t.appendChild(n),t.appendChild(s),t.appendChild(c),t.appendChild(d),e.appendChild(t)}}class t{static Menu(){const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div");a.innerHTML="<h1>Appetizers</h1> <span>Samosas   $5</span> <span>Bhel Puri   $5</span> <span>Dahi Batata Puri    $5</span>",n.innerHTML="<h1>Drinks</h1> <span>Lassi     $5</span> <span>Mango Lassi     $5</span> <span>Soft drink      $3</span>",s.innerHTML="<h1>Entrees</h1> <span>Butter Chicken   $15</span> <span>Korma      $15</span> <span>Chana Masala       $15</span> <span>Chole Bhature      $10</span> <span>Dosa   $10</span>",c.innerHTML="<h1>Sweets</h1> <span>Gulab Jamun   $5</span> <span>Kheer   $5</span>",t.classList.add("menu"),t.appendChild(a),t.appendChild(n),t.appendChild(s),t.appendChild(c),e.appendChild(t)}}class a{static ContactUs(){const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div");a.innerHTML="<span><em>Telephone:</em> 123-456-7890</span> <span><em>Email:</em> thisisareal@emailaddress.com</span> <span><em>Fax:</em> 098-765-4321</span>",n.innerHTML="<a href='https://www.instagram.com/' class =\"fa fa-instagram\"> </a> <a href='https://www.twitter.com/' class =\"fa fa-twitter\"></a> <a href='https://www.facebook.com/' class =\"fa fa-facebook\"> </a>",s.innerHTML="<span><em>Address:</em> Street Name, City Name, Zip Code</span> <span><em>Hours:</em> 11am to 8pm</span>",t.appendChild(a),t.appendChild(s),t.appendChild(n),t.classList.add("contact"),n.setAttribute("id","socials"),e.appendChild(t)}}class n{static Home(){const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("h1"),n=document.createElement("h3");a.innerText="Welcome to the Jade Peacock",n.innerText="A taste of home, far away from home",a.classList.add("home"),n.classList.add("homeTagline"),t.appendChild(a),t.appendChild(n),e.appendChild(t)}}class s{static ClearDiv(){document.querySelector("#content").innerHTML=""}}(class{static Tabs(){const e=document.querySelector(".nav"),t=document.createElement("div"),a=document.createElement("button"),n=document.createElement("button"),s=document.createElement("button"),c=document.createElement("button");a.innerText="Home",n.innerText="About Us",s.innerText="Menu",c.innerText="Contact",a.classList.add("homeTab"),n.classList.add("aboutUsTab"),s.classList.add("menuTab"),c.classList.add("contactTab"),t.classList.add("tabContainer"),t.appendChild(a),t.appendChild(n),t.appendChild(s),t.appendChild(c),e.appendChild(t)}}).Tabs(),n.Home();const c=document.querySelector(".aboutUsTab"),d=document.querySelector(".menuTab"),o=document.querySelector(".contactTab"),i=document.querySelector(".homeTab");c.addEventListener("click",(()=>{s.ClearDiv(),e.Description()})),d.addEventListener("click",(()=>{s.ClearDiv(),t.Menu()})),o.addEventListener("click",(()=>{s.ClearDiv(),a.ContactUs()})),i.addEventListener("click",(()=>{s.ClearDiv(),n.Home()}))})();