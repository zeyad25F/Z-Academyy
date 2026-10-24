/* ===== EDIT YOUR DETAILS HERE (one place for the whole website) ===== */
const ZA = {
  phone:     "+20 100 522 3383",                 // shown on the website
  whatsapp:  "https://wa.me/201005223383",       // WhatsApp link (country code + number, no +)
  email:     "info@z-academy.online",
  facebook:  "https://www.facebook.com/share/1AjRboSQMQ/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/z_academy_eg?igsi=MWtiOXpsMm1tNzF3bg==",
  linkedin:  "https://www.linkedin.com/company/z-academyedu/",
  googleForm:"https://forms.gle/gwkmb4Sq6zX7RvQR8"  // your Google Form registration link
};
document.querySelectorAll("[data-phone]").forEach(e=>{e.textContent=ZA.phone;if(e.tagName==="A")e.href="tel:"+ZA.phone.replace(/\s/g,"")});
document.querySelectorAll("[data-email]").forEach(e=>{e.textContent=ZA.email;if(e.tagName==="A")e.href="mailto:"+ZA.email});
document.querySelectorAll("[data-link]").forEach(e=>{const u=ZA[e.dataset.link];if(u){e.href=u;e.target="_blank";e.rel="noopener"}});
const m=document.getElementById("menu"),n=document.getElementById("nav");
if(m)m.addEventListener("click",()=>n.classList.toggle("open"));
