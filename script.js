const products = window.AMIRUD_PRODUCTS || [];
let cart = [];
let activeFilter = "all";
const $ = (s) => document.querySelector(s);
const money = (n) => "₹" + Number(n).toLocaleString("en-IN");
const grid = $("#productGrid"), drawer = $("#cartDrawer");
function renderProducts(){
  let list = products.filter(p => activeFilter === "all" || p.category === activeFilter);
  const sort = $("#sortSelect").value;
  if(sort==="low") list.sort((a,b)=>a.price-b.price);
  if(sort==="high") list.sort((a,b)=>b.price-a.price);
  grid.innerHTML = list.map((p,i)=>`<article class="product-card">
    <div class="product-visual"><span class="product-tag">${p.tag}</span><span class="visual-label">AMIRUD · ${String(p.id).padStart(2,"0")}</span><button class="add-button" data-add="${p.id}" aria-label="Add ${p.name} to bag">+</button></div>
    <div class="product-info"><h3>${p.name}</h3><p>${p.description}</p><span class="product-price">${money(p.price)}</span></div>
  </article>`).join("") || '<p>No products in this category yet.</p>';
}
function renderCart(){
  const count=cart.reduce((n,x)=>n+x.qty,0), total=cart.reduce((n,x)=>n+x.price*x.qty,0);
  $("#cartCount").textContent=count; $("#drawerCount").textContent=`(${count})`; $("#subtotal").textContent=money(total);
  $("#cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-line"><div><strong>${x.name}</strong><small>${money(x.price)} each</small><div class="qty-controls"><button data-qty="${x.id}" data-delta="-1">−</button><span>${x.qty}</span><button data-qty="${x.id}" data-delta="1">+</button></div></div><div><b>${money(x.price*x.qty)}</b><br><button class="remove-item" data-remove="${x.id}">Remove</button></div></div>`).join(""):'<p class="empty-cart">Your bag is currently empty.</p>';
}
function toast(message){const t=$("#toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function openCart(){document.body.classList.add("cart-open");drawer.setAttribute("aria-hidden","false")}
function closeCart(){document.body.classList.remove("cart-open");drawer.setAttribute("aria-hidden","true")}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.add));const existing=cart.find(x=>x.id===p.id);existing?existing.qty++:cart.push({...p,qty:1});renderCart();toast("Added to your bag");});
$("#cartItems").addEventListener("click",e=>{const q=e.target.closest("[data-qty]"),r=e.target.closest("[data-remove]");if(q){const item=cart.find(x=>x.id===Number(q.dataset.qty));item.qty+=Number(q.dataset.delta);if(item.qty<=0)cart=cart.filter(x=>x.id!==item.id);}if(r)cart=cart.filter(x=>x.id!==Number(r.dataset.remove));renderCart();});
$("#filters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts();});
$("#sortSelect").addEventListener("change",renderProducts);
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#drawerBackdrop").addEventListener("click",closeCart);
$("#checkoutBtn").addEventListener("click",()=>toast("Demo only — connect a checkout or order channel before launch."));
$("#contactForm").addEventListener("submit",e=>{e.preventDefault();const name=$("#contactName").value,email=$("#contactEmail").value,msg=$("#contactMessage").value;const subject=encodeURIComponent("AMIRUD website enquiry");const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);window.location.href=`mailto:hello@amirud.in?subject=${subject}&body=${body}`;});
$("#menuToggle").addEventListener("click",()=>{const n=$("#mainNav"),open=n.classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
$("#year").textContent=new Date().getFullYear();
renderProducts();renderCart();