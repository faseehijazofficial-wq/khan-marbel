const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if(menuButton && nav){
  menuButton.addEventListener("click",()=> {
    nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}
document.querySelectorAll(".faq-question").forEach(button=>{
  button.addEventListener("click",()=>{
    const item=button.closest(".faq-item");
    item.classList.toggle("open");
    const symbol=button.querySelector("span");
    if(symbol) symbol.textContent=item.classList.contains("open")?"−":"+";
    button.setAttribute("aria-expanded",item.classList.contains("open"));
  });
});
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const modal=document.querySelector(".modal");
if(modal){
  document.querySelectorAll("[data-lightbox]").forEach(img=>img.addEventListener("click",()=>{
    modal.classList.add("show");
    modal.querySelector("img").src=img.src;
    modal.setAttribute("aria-hidden","false");
  }));
  modal.addEventListener("click",e=>{
    if(e.target===modal || e.target.closest("button")){
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden","true");
    }
  });
}
const contactForm=document.querySelector("#contactForm");
if(contactForm){
  contactForm.addEventListener("submit",e=>{
    e.preventDefault();
    if(!contactForm.reportValidity()) return;
    const data=new FormData(contactForm);
    const message=[
      "Hello Khan Marble & Tile Store,",
      "Name: "+data.get("name"),
      "Phone: "+data.get("phone"),
      "Email: "+(data.get("email")||"Not provided"),
      "Subject: "+data.get("subject"),
      "Message: "+data.get("message")
    ].join("\\n");
    window.open("https://wa.me/923012443888?text="+encodeURIComponent(message),"_blank");
  });
}
