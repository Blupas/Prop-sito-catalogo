(function(){
  "use strict";



  var MODELAGENS = ["Skinny","Reta","Wide Leg","Flare","Mom","Boyfriend","Slim","Reta Ampla","Jogger"];
  var CORES = ["Azul Claro","Azul Médio","Azul Escuro","Preto","Cinza","Branco","Destroyed","Stone"];
  var TAMANHOS_PADRAO = ["34","36","38","40","42","44"];
  var COR_HEX = {
    "Azul Claro":"#7FA0C4","Azul Médio":"#4A6E93","Azul Escuro":"#22415F",
    "Preto":"#26292E","Cinza":"#8C9096","Branco":"#DAD6C9","Destroyed":"#6488AC","Stone":"#A79C87"
  };

  /* ============ ICONS ============ */
  var ICON = {
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
    back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',
    plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6"/></svg>',
    share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-3.8M8.6 13.5l6.8 3.8"/></svg>',
    whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.4 5.12L2 22l5.13-1.5a9.87 9.87 0 004.9 1.3h.01c5.46 0 9.9-4.44 9.9-9.9C21.94 6.44 17.5 2 12.04 2zm0 18.06h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.11.91.93-3.03-.2-.31a8.14 8.14 0 01-1.27-4.39c0-4.51 3.68-8.19 8.2-8.19 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 012.4 5.8c0 4.51-3.68 8.19-8.24 8.19zm4.5-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.66.31-.23.24-.86.85-.86 2.06 0 1.22.88 2.4 1 2.56.12.16 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>',
    tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41L11 22l-9-9 8.59-8.59A2 2 0 0112 4h7a1 1 0 011 1v7a2 2 0 01-.41 1.41z"/><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
    cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9.5" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="17.5" cy="20" r="1.4" fill="currentColor" stroke="none"/></svg>',
    minus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14"/></svg>'
  };

  function jeansIllustration(hex, big){
    hex = hex || "#4A6E93";
    var w = big ? 400 : 300, h = big ? 500 : 375;
    return '<svg viewBox="0 0 300 375" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:#EFEDE4" preserveAspectRatio="xMidYMid slice">'+
      '<rect width="300" height="375" fill="#EFEDE4"/>'+
      '<g transform="translate(150,190)">'+
      '<path d="M-58,-140 L58,-140 L64,-16 L34,150 L14,150 L2,-2 L-2,-2 L-14,150 L-34,150 L-64,-16 Z" fill="'+hex+'" stroke="rgba(43,30,20,.35)" stroke-width="2" stroke-linejoin="round"/>'+
      '<path d="M-58,-140 L58,-140 L60,-108 L-60,-108 Z" fill="rgba(255,255,255,.14)"/>'+
      '<path d="M-2,-2 L2,-2 L14,150 L-14,150 Z" fill="rgba(43,30,20,.12)"/>'+
      '<circle cx="-30" cy="-150" r="3.5" fill="#C9A34E"/><circle cx="30" cy="-150" r="3.5" fill="#C9A34E"/>'+
      '<path d="M-40,-140 Q0,-124 40,-140" fill="none" stroke="rgba(201,163,78,.9)" stroke-width="2" stroke-dasharray="4 3"/>'+
      '<path d="M-58,-140 L58,-140" stroke="rgba(43,30,20,.3)" stroke-width="1.5" stroke-dasharray="3 3"/>'+
      '<path d="M-64,-16 L64,-16" stroke="rgba(43,30,20,.22)" stroke-width="1.2" stroke-dasharray="3 3"/>'+
      '</g></svg>';
  }

  /* ============ STATE ============ */
  var state = {
    view: "catalog",
    products: [],
    loading: true,
    storageError: false,
    searchQuery: "",
    searchOpen: false,
    activeCategory: "todos",
    filters: { tamanho: [], modelagem: [], corLavagem: [] },
    filterSheetOpen: false,
    tempFilters: null,
    selectedProductId: null,
    isAdmin: false,
    adminError: "",
    adminSearch: "",
    formState: null,
    editingId: null,
    formError: "",
    deleteConfirmId: null,
    toast: null,
    shareCopied: false,
    cart: [],
    cartOpen: false,
    selectedSizes: []
  };

  function normalize(s){
    return (s||"").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  }
  function uid(){ return "p-" + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
  function money(v){
    if(v === null || v === undefined || v === "") return null;
    var n = Number(v);
    if(isNaN(n)) return null;
    return n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
  }
  function escapeAttr(s){
    return (s||"").toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }
  function timeAgoIsNew(iso){
    if(!iso) return false;
    var d = new Date(iso).getTime();
    if(isNaN(d)) return false;
    return (Date.now() - d) < (1000*60*60*24*45); // 45 dias
  }

  function seedProducts(){
    var now = Date.now();
    function d(daysAgo){ return new Date(now - daysAgo*86400000).toISOString(); }
    return [
      {id:uid(), nome:"Calça Jeans Skinny Cintura Alta", referencia:"PJ-001", descricao:"Modelagem skinny com cintura alta que valoriza a silhueta, tecido com leve elastano para maior conforto no dia a dia. Lavagem azul escura, versátil para qualquer ocasião.", foto:"", tamanhos:["34","36","38","40","42"], preco:189.9, modelagem:"Skinny", corLavagem:"Azul Escuro", novidade:false, maisVendido:true, dataCadastro:d(120)},
      {id:uid(), nome:"Calça Jeans Reta Clássica", referencia:"PJ-002", descricao:"Um clássico que nunca sai de moda: modelagem reta, cintura média e lavagem azul médio equilibrada. Ótima para compor looks casuais ou mais elaborados.", foto:"", tamanhos:["36","38","40","42","44"], preco:179.9, modelagem:"Reta", corLavagem:"Azul Médio", novidade:true, maisVendido:false, dataCadastro:d(6)},
      {id:uid(), nome:"Calça Jeans Wide Leg Preta", referencia:"PJ-003", descricao:"Modelagem wide leg em jeans preto, cintura alta e pernas amplas que criam um caimento fluido e moderno. Perfeita para quem busca conforto sem abrir mão do estilo.", foto:"", tamanhos:["34","36","38","40"], preco:209.9, modelagem:"Wide Leg", corLavagem:"Preto", novidade:true, maisVendido:false, dataCadastro:d(3)},
      {id:uid(), nome:"Calça Jeans Mom Stone", referencia:"PJ-004", descricao:"Inspirada nos anos 90, a mom jeans traz cintura super alta e caimento levemente afunilado nos tornozelos. Lavagem stone com toque vintage.", foto:"", tamanhos:["36","38","40","42"], preco:199.9, modelagem:"Mom", corLavagem:"Stone", novidade:false, maisVendido:true, dataCadastro:d(200)},
      {id:uid(), nome:"Jaqueta Jeans Oversized", referencia:"PJ-005", descricao:"Jaqueta em jeans de lavagem azul claro com caimento oversized. Peça-chave para compor produções despojadas em qualquer estação.", foto:"", tamanhos:["36","38","40","42","44"], preco:249.9, modelagem:"Boyfriend", corLavagem:"Azul Claro", novidade:false, maisVendido:false, dataCadastro:d(90)},
      {id:uid(), nome:"Bermuda Jeans Slim Destroyed", referencia:"PJ-006", descricao:"Bermuda jeans modelagem slim com efeito destroyed sutil nas coxas. Tecido leve, perfeita para os dias mais quentes.", foto:"", tamanhos:["34","36","38","40"], preco:129.9, modelagem:"Slim", corLavagem:"Destroyed", novidade:true, maisVendido:false, dataCadastro:d(10)},
      {id:uid(), nome:"Saia Jeans Reta Midi", referencia:"PJ-007", descricao:"Saia jeans de corte reto e comprimento midi, com fenda discreta. Lavagem azul escura que combina com qualquer produção.", foto:"", tamanhos:["34","36","38","40","42"], preco:159.9, modelagem:"Reta", corLavagem:"Azul Escuro", novidade:false, maisVendido:false, dataCadastro:d(160)},
      {id:uid(), nome:"Calça Jeans Flare Azul Médio", referencia:"PJ-008", descricao:"Modelagem flare com cintura alta e barra levemente alargada a partir do joelho, resgatando a estética setentista com um toque atual.", foto:"", tamanhos:["36","38","40","42"], preco:219.9, modelagem:"Flare", corLavagem:"Azul Médio", novidade:false, maisVendido:true, dataCadastro:d(75)}
    ];
  }

  /* ============ STORAGE ============ */

  function saveProducts(list, silent){
    return window.storage.set(STORAGE_KEY, JSON.stringify(list), true).then(function(){
      state.storageError = false;
      if(!silent) render();
    }).catch(function(){
      state.storageError = true;
      if(!silent) render();
    });
  }

  function saveCart(){
    window.storage.set(CART_STORAGE_KEY, JSON.stringify(state.cart), false).catch(function(){});
  }

  /* ============ ROUTING (in-memory, no hash — reliable inside the artifact iframe) ============ */
  function showToast(msg){
    state.toast = msg;
    render();
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ state.toast = null; render(); }, 2600);
  }
  window.openProduct = function(id){
    state.returnView = state.view === "detail" ? (state.returnView || "catalog") : state.view;
    state.selectedProductId = id;
    state.selectedSizes = [];
    state.view = "detail";
    render(); window.scrollTo(0,0);
  };
  window.goBack = function(){
    if(state.view === "admin-form"){ closeForm(); return; }
    if(state.view === "detail"){ state.view = state.returnView || "catalog"; state.selectedProductId = null; state.selectedSizes = []; render(); window.scrollTo(0,0); return; }
    // admin-login / admin-dashboard and anything else -> exit to public catalog
    state.view = "catalog";
    render(); window.scrollTo(0,0);
  };
  window.toggleSearch = function(){ state.searchOpen = !state.searchOpen; render(); if(state.searchOpen){ setTimeout(function(){ var el=document.getElementById('search-input'); if(el) el.focus(); },10);} };
  window.setSearch = function(v){ state.searchQuery = v; render(); };
  window.setCategory = function(cat){ state.activeCategory = cat; render(); window.scrollTo({top:0,behavior:'smooth'}); };

  window.openFilters = function(){
    state.tempFilters = JSON.parse(JSON.stringify(state.filters));
    state.filterSheetOpen = true; render();
  };
  window.closeFilters = function(){ state.filterSheetOpen = false; render(); };
  window.toggleTempFilter = function(group, val){
    var arr = state.tempFilters[group];
    var idx = arr.indexOf(val);
    if(idx>-1) arr.splice(idx,1); else arr.push(val);
    render();
  };
  window.applyFilters = function(){
    state.filters = state.tempFilters; state.filterSheetOpen = false; render();
  };
  window.clearFilters = function(){
    state.tempFilters = {tamanho:[],modelagem:[],corLavagem:[]}; render();
  };

  window.shareProduct = function(id){
    var p = state.products.find(function(x){return x.id===id;});
    var text = p ? (p.nome + " — Ref. " + p.referencia + " — Propósito Jeans") : "Propósito Jeans";
    if(navigator.share){
      navigator.share({title: p ? p.nome : "Propósito Jeans", text: text}).catch(function(){});
    } else if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(function(){ showToast("Informações do produto copiadas!"); });
    } else {
      showToast(text);
    }
  };

  /* ============ CART ============ */
  window.selectSize = function(sz){
    var arr = state.selectedSizes;
    var idx = arr.indexOf(sz);
    if(idx>-1) arr.splice(idx,1); else arr.push(sz);
    render();
  };
  window.addToCart = function(id){
    var p = state.products.find(function(x){return x.id===id;});
    if(!p) return;
    if(!state.selectedSizes.length){ showToast("Escolha ao menos um tamanho antes de adicionar."); return; }
    state.selectedSizes.forEach(function(size){
      var existing = state.cart.find(function(it){ return it.productId===id && it.tamanho===size; });
      if(existing){
        existing.qty += 1;
      } else {
        state.cart.push({
          cartId: uid(), productId: id, nome: p.nome, referencia: p.referencia,
          tamanho: size, preco: p.preco, foto: p.foto, corLavagem: p.corLavagem, qty: 1
        });
      }
    });
    var n = state.selectedSizes.length;
    saveCart();
    state.selectedSizes = [];
    showToast(n === 1 ? "Adicionado ao carrinho." : n + " tamanhos adicionados ao carrinho.");
    render();
  };
  window.removeFromCart = function(cartId){
    state.cart = state.cart.filter(function(it){ return it.cartId !== cartId; });
    saveCart(); render();
  };
  window.changeCartQty = function(cartId, delta){
    var it = state.cart.find(function(x){ return x.cartId===cartId; });
    if(!it) return;
    it.qty += delta;
    if(it.qty <= 0){ state.cart = state.cart.filter(function(x){ return x.cartId!==cartId; }); }
    saveCart(); render();
  };
  window.clearCart = function(){
    if(state.cart.length && !confirm("Esvaziar o carrinho? Isso vai remover todos os itens.")) return;
    state.cart = []; saveCart(); render();
  };
  window.toggleCart = function(){
    state.cartOpen = !state.cartOpen; render();
  };
  function cartCount(){
    return state.cart.reduce(function(sum,it){ return sum + it.qty; }, 0);
  }
  function cartTotal(){
    var hasAllPrices = state.cart.every(function(it){ return it.preco !== null && it.preco !== undefined; });
    if(!hasAllPrices) return null;
    return state.cart.reduce(function(sum,it){ return sum + (it.preco * it.qty); }, 0);
  }
  function buildOrderMessage(){
    var lines = ["Olá! Gostaria de fazer o seguinte pedido na Propósito Jeans:", ""];
    state.cart.forEach(function(it, i){
      var priceTxt = (it.preco!==null && it.preco!==undefined) ? " — " + money(it.preco) + " un." : "";
      lines.push((i+1)+". "+it.nome+" (Ref. "+it.referencia+") — Tam. "+it.tamanho+" — Qtd. "+it.qty+priceTxt);
    });
    var total = cartTotal();
    lines.push("");
    if(total !== null){ lines.push("Total estimado: " + money(total)); lines.push(""); }
    lines.push("Podem confirmar disponibilidade e forma de entrega?");
    return lines.join("\n");
  }
  window.checkoutWhatsApp = function(){
    if(!state.cart.length){ showToast("Seu carrinho está vazio."); return; }
    var msg = encodeURIComponent(buildOrderMessage());
    window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+msg, "_blank", "noopener");
  };

  window.goAdmin = function(){
    state.view = state.isAdmin ? "admin-dashboard" : "admin-login";
    render(); window.scrollTo(0,0);
  };
  window.adminLogout = function(){
    state.isAdmin = false; state.formState = null; state.editingId = null;
    state.view = "catalog"; render(); window.scrollTo(0,0);
  };
  window.submitLogin = function(){
    var u = document.getElementById('admin-user').value.trim();
    var p = document.getElementById('admin-pass').value;
    if(u === ADMIN_USER && p === ADMIN_PASS){
      state.isAdmin = true; state.adminError=""; state.view="admin-dashboard"; render(); window.scrollTo(0,0);
    } else {
      state.adminError = "Usuário ou senha incorretos.";
      render();
    }
  };

  window.setAdminSearch = function(v){ state.adminSearch = v; render(); };

  function emptyForm(){
    return {nome:"", referencia:"", descricao:"", foto:"", tamanhos:[], preco:"", modelagem:MODELAGENS[0], corLavagem:CORES[0], novidade:false, maisVendido:false};
  }
  window.openNewProduct = function(){
    state.formState = emptyForm(); state.editingId = null; state.formError="";
    state.view = "admin-form"; render(); window.scrollTo(0,0);
  };
  window.openEditProduct = function(id){
    var p = state.products.find(function(x){return x.id===id;});
    if(!p) return;
    state.formState = {
      nome:p.nome, referencia:p.referencia, descricao:p.descricao,
      foto:p.foto||"", tamanhos:p.tamanhos.slice(), preco: p.preco===null||p.preco===undefined ? "" : p.preco,
      modelagem:p.modelagem, corLavagem:p.corLavagem, novidade:!!p.novidade, maisVendido:!!p.maisVendido
    };
    state.editingId = id; state.formError="";
    state.view = "admin-form"; render(); window.scrollTo(0,0);
  };
  window.closeForm = function(){
    state.formState = null; state.editingId = null; state.view = "admin-dashboard"; render();
  };
  window.setFormField = function(k,v){ state.formState[k] = v; };
  window.clearFormPhoto = function(){
    state.formState.foto = "";
    render();
  };
  window.handleFileUpload = function(input){
    var file = input.files && input.files[0];
    if(!file) return;
    if(file.type.indexOf('image/') !== 0){ showToast("Escolha um arquivo de imagem."); input.value=""; return; }
    state.formPhotoLoading = true; render();
    var reader = new FileReader();
    reader.onload = function(e){
      var img = new Image();
      img.onload = function(){
        var maxW = 800;
        var scale = Math.min(1, maxW / img.width);
        var w = Math.max(1, Math.round(img.width * scale));
        var h = Math.max(1, Math.round(img.height * scale));
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        var dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        state.formState.foto = dataUrl;
        state.formPhotoLoading = false;
        input.value = "";
        render();
      };
      img.onerror = function(){
        state.formPhotoLoading = false;
        showToast("Não foi possível ler essa imagem.");
        render();
      };
      img.src = e.target.result;
    };
    reader.onerror = function(){
      state.formPhotoLoading = false;
      showToast("Não foi possível ler esse arquivo.");
      render();
    };
    reader.readAsDataURL(file);
  };
  window.toggleFormSize = function(sz){
    var arr = state.formState.tamanhos;
    var idx = arr.indexOf(sz);
    if(idx>-1) arr.splice(idx,1); else arr.push(sz);
    render();
  };
  window.toggleFormBool = function(k){ state.formState[k] = !state.formState[k]; render(); };

  window.saveProduct = function(){
    var f = state.formState;
    f.nome = document.getElementById('f-nome').value.trim();
    f.referencia = document.getElementById('f-ref').value.trim();
    f.descricao = document.getElementById('f-descricao').value.trim();
    f.preco = document.getElementById('f-preco').value.trim();
    f.modelagem = document.getElementById('f-modelagem').value;
    f.corLavagem = document.getElementById('f-cor').value;

    if(!f.nome){ state.formError = "Informe o nome do produto."; render(); return; }
    if(!f.referencia){ state.formError = "Informe a referência/código."; render(); return; }
    if(!f.tamanhos.length){ state.formError = "Selecione ao menos um tamanho disponível."; render(); return; }

    var precoNum = f.preco === "" ? null : Number(f.preco.replace(",", "."));
    if(f.preco !== "" && isNaN(precoNum)){ state.formError = "Preço inválido."; render(); return; }

    if(state.editingId){
      var idx = state.products.findIndex(function(x){return x.id===state.editingId;});
      if(idx>-1){
        var prev = state.products[idx];
        state.products[idx] = Object.assign({}, prev, {
          nome:f.nome, referencia:f.referencia, descricao:f.descricao,
          foto:f.foto, tamanhos:f.tamanhos.slice(), preco:precoNum, modelagem:f.modelagem, corLavagem:f.corLavagem,
          novidade:!!f.novidade, maisVendido:!!f.maisVendido
        });
      }
    } else {
      state.products.unshift({
        id:uid(), nome:f.nome, referencia:f.referencia, descricao:f.descricao,
        foto:f.foto, tamanhos:f.tamanhos.slice(), preco:precoNum, modelagem:f.modelagem, corLavagem:f.corLavagem,
        novidade:!!f.novidade, maisVendido:!!f.maisVendido, dataCadastro:new Date().toISOString()
      });
    }
    var wasEditing = !!state.editingId;
    saveProducts(state.products).then(function(){
      showToast(wasEditing ? "Produto atualizado com sucesso." : "Produto adicionado ao catálogo.");
    });
    state.formState = null; state.editingId = null; state.formError="";
    state.view = "admin-dashboard"; render();
  };

  window.askDelete = function(id){ state.deleteConfirmId = id; render(); };
  window.cancelDelete = function(){ state.deleteConfirmId = null; render(); };
  window.confirmDelete = function(){
    var id = state.deleteConfirmId;
    state.products = state.products.filter(function(p){return p.id!==id;});
    state.deleteConfirmId = null;
    saveProducts(state.products).then(function(){ showToast("Produto excluído."); });
    render();
  };

  /* ============ FILTER LOGIC ============ */
  function getFilteredProducts(){
    var list = state.products.slice();
    if(state.activeCategory==='novidades') list = list.filter(function(p){return p.novidade || timeAgoIsNew(p.dataCadastro);});
    else if(state.activeCategory==='maisvendidos') list = list.filter(function(p){return p.maisVendido;});

    var q = normalize(state.searchQuery.trim());
    if(q) list = list.filter(function(p){ return normalize(p.nome).indexOf(q)>-1 || normalize(p.referencia).indexOf(q)>-1; });

    var f = state.filters;
    if(f.tamanho.length) list = list.filter(function(p){ return p.tamanhos.some(function(t){return f.tamanho.indexOf(t)>-1;}); });
    if(f.modelagem.length) list = list.filter(function(p){ return f.modelagem.indexOf(p.modelagem)>-1; });
    if(f.corLavagem.length) list = list.filter(function(p){ return f.corLavagem.indexOf(p.corLavagem)>-1; });
    return list;
  }
  function activeFilterCount(){
    var f = state.filters;
    return f.tamanho.length + f.modelagem.length + f.corLavagem.length;
  }

  /* ============ RENDER: PARTIALS ============ */
  function renderHeader(showBack, title, showCart){
    if(showCart === undefined) showCart = true;
    var cartBtn = showCart ? '<button class="icon-btn cart-icon-btn" onclick="toggleCart()" aria-label="Carrinho">'+ICON.cart+(cartCount()>0 ? '<span class="cart-badge">'+cartCount()+'</span>' : '')+'</button>' : '';
    if(showBack){
      return '<div class="view-header shell" style="max-width:1180px">'+
        '<button class="back-btn" onclick="goBack()" aria-label="Voltar">'+ICON.back+'</button>'+
        '<div class="vtitle" style="flex:1">'+title+'</div>'+
        cartBtn+
        '</div>';
    }
    return '<div class="topbar"><div class="shell">'+
      '<div class="topbar-inner">'+
        '<div class="wordmark">Propósito Jeans</div>'+
        '<div class="topbar-actions">'+
          '<button class="icon-btn" onclick="toggleSearch()" aria-label="Buscar">'+ICON.search+'</button>'+
          cartBtn+
        '</div>'+
      '</div>'+
      '<div class="search-row'+(state.searchOpen?' open':'')+'">'+
        '<div class="search-box">'+ICON.search+
          '<input id="search-input" type="text" placeholder="Buscar por nome ou referência..." value="'+escapeAttr(state.searchQuery)+'" oninput="setSearch(this.value)">'+
          (state.searchQuery ? '<button class="icon-btn" style="width:26px;height:26px" onclick="setSearch(\'\')" aria-label="Limpar busca">'+ICON.close+'</button>' : '')+
        '</div>'+
      '</div>'+
    '</div></div>';
  }

  function renderHero(){
    return '<div class="hero">'+
      '<div class="hero-eyebrow"><span class="dash"></span>Loja de jeans<span class="dash"></span></div>'+
      '<h1 class="serif">Seu estilo começa aqui.</h1>'+
      '<p>Calças jeans e peças em denim selecionadas com foco em caimento, durabilidade e um jeitinho de vestir todo dia.</p>'+
    '</div>';
  }

  function renderChips(){
    var cats = [["todos","Todos os produtos"],["novidades","Novidades"],["maisvendidos","Mais vendidos"]];
    return '<div class="chip-scroller">' + cats.map(function(c){
      return '<button class="chip'+(state.activeCategory===c[0]?' active':'')+'" onclick="setCategory(\''+c[0]+'\')">'+c[1]+'</button>';
    }).join('') + '</div>';
  }

  function renderToolbar(filtered){
    var count = activeFilterCount();
    return '<div class="toolbar">'+
      '<span class="result-count">'+filtered.length+(filtered.length===1?' produto':' produtos')+'</span>'+
      '<button class="filter-btn" onclick="openFilters()">'+ICON.filter+'Filtrar'+(count?'<span class="filter-badge">'+count+'</span>':'')+'</button>'+
    '</div>';
  }

  function renderCard(p){
    var price = money(p.preco);
    var img = p.foto ? '<img src="'+escapeAttr(p.foto)+'" alt="'+escapeAttr(p.nome)+'" loading="lazy">' : jeansIllustration(COR_HEX[p.corLavagem]);
    var tag = p.novidade ? '<span class="card-tag copper">Novidade</span>' : (p.maisVendido ? '<span class="card-tag">Mais vendido</span>' : '');
    return '<button class="card" onclick="openProduct(\''+p.id+'\')">'+
      '<div class="card-media">'+tag+img+'</div>'+
      '<div class="card-body">'+
        '<div class="card-name serif">'+escapeAttr(p.nome)+'</div>'+
        '<div class="card-ref">Ref. '+escapeAttr(p.referencia)+'</div>'+
        '<div class="card-sizes">'+p.tamanhos.join(' • ')+'</div>'+
        '<div class="card-foot">'+
          (price ? '<span class="card-price">'+price+'</span>' : '<span class="card-price empty">Consulte</span>')+
          '<span class="card-link">Ver detalhes</span>'+
        '</div>'+
      '</div>'+
    '</button>';
  }

  function renderSkeletons(){
    var out = '';
    for(var i=0;i<6;i++){
      out += '<div class="sk-card"><div class="sk-media"></div><div class="sk-line" style="width:80%"></div><div class="sk-line w60"></div></div>';
    }
    return out;
  }

  function renderEmpty(){
    return '<div class="empty-state">'+ICON.box+
      '<h3 class="serif">Nenhum produto encontrado</h3>'+
      '<p>Tente ajustar a busca ou remover alguns filtros para ver mais opções do catálogo.</p>'+
    '</div>';
  }

  function renderGrid(){
    if(state.loading){
      return '<div class="grid">'+renderSkeletons()+'</div>';
    }
    var filtered = getFilteredProducts();
    var cardsHtml = filtered.length ? filtered.map(renderCard).join('') : renderEmpty();
    return renderToolbar(filtered) + '<div class="grid">'+cardsHtml+'</div>';
  }

  function renderFooter(){
    return '<div class="site-footer">'+
      '<div class="fmark serif">Propósito Jeans</div>'+
      '<p style="font-size:12.5px;color:var(--stone)">Peças em denim para o seu dia a dia.</p>'+
      '<button class="footer-admin" onclick="goAdmin()">'+ICON.lock+'Área administrativa</button>'+
    '</div>';
  }

  function renderFab(){
    var msg = encodeURIComponent("Olá! Vim do catálogo da Propósito Jeans e gostaria de saber mais.");
    return '<a class="fab" href="https://wa.me/'+WHATSAPP_NUMBER+'?text='+msg+'" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">'+ICON.whatsapp+'</a>';
  }

  function renderCatalog(){
    return '<div class="view">'+
      renderHeader(false)+
      renderHero()+
      renderChips()+
      renderGrid()+
      renderFooter()+
      renderFab()+
    '</div>';
  }

  /* ---------- product detail ---------- */
  function renderDetail(){
    var p = state.products.find(function(x){return x.id===state.selectedProductId;});
    if(!p){ return renderCatalog(); }
    var price = money(p.preco);
    var img = p.foto ? '<img src="'+escapeAttr(p.foto)+'" alt="'+escapeAttr(p.nome)+'">' : jeansIllustration(COR_HEX[p.corLavagem], true);
    var msg = encodeURIComponent("Olá! Tenho interesse na peça \""+p.nome+"\" (ref. "+p.referencia+") do catálogo da Propósito Jeans.");
    return '<div class="view">'+
      renderHeader(true, "Detalhes do produto")+
      '<div class="pd-media">'+img+'</div>'+
      '<div class="pd-body">'+
        '<div class="pd-ref">REF. '+escapeAttr(p.referencia)+'</div>'+
        '<h1 class="pd-name">'+escapeAttr(p.nome)+'</h1>'+
        (price ? '<div class="pd-price">'+price+'</div>' : '<div class="pd-price" style="color:var(--stone);font-size:15px;font-weight:500">Preço sob consulta</div>')+
        '<div class="pd-meta">'+
          '<span class="meta-pill">'+escapeAttr(p.modelagem)+'</span>'+
          '<span class="meta-pill">'+escapeAttr(p.corLavagem)+'</span>'+
        '</div>'+
        '<div class="pd-section-label">Descrição</div>'+
        '<p class="pd-desc">'+escapeAttr(p.descricao)+'</p>'+
        '<div class="pd-section-label">Escolha os tamanhos <span class="pd-section-hint">(pode marcar mais de um)</span></div>'+
        '<div class="size-row">'+p.tamanhos.map(function(t){
          var sel = state.selectedSizes.indexOf(t) > -1;
          return '<button type="button" class="size-pill'+(sel?' selected':'')+'" onclick="selectSize(\''+t+'\')">'+t+'</button>';
        }).join('')+'</div>'+
        '<a class="pd-whatsapp-link" href="https://wa.me/'+WHATSAPP_NUMBER+'?text='+msg+'" target="_blank" rel="noopener">'+ICON.whatsapp+' Prefere perguntar direto? Fale no WhatsApp</a>'+
      '</div>'+
      '<div class="pd-fixed-bar"><div class="shell">'+
        '<button class="btn btn-ghost" style="width:auto;padding:13px 16px" onclick="shareProduct(\''+p.id+'\')" aria-label="Compartilhar">'+ICON.share+'</button>'+
        '<button class="btn btn-primary" onclick="addToCart(\''+p.id+'\')">'+ICON.cart+' Adicionar'+(state.selectedSizes.length>1 ? ' '+state.selectedSizes.length+' tamanhos' : '')+' ao carrinho</button>'+
      '</div></div>'+
    '</div>';
  }

  /* ---------- filter sheet ---------- */
  function renderFilterGroup(label, key, options){
    var arr = state.tempFilters[key];
    return '<div class="filter-group"><h4>'+label+'</h4><div class="filter-options">'+
      options.map(function(o){
        var on = arr.indexOf(o)>-1;
        return '<button class="opt-chip'+(on?' on':'')+'" onclick="toggleTempFilter(\''+key+'\',\''+o+'\')">'+o+'</button>';
      }).join('')+
    '</div></div>';
  }
  function renderFilterSheet(){
    var open = state.filterSheetOpen;
    if(!state.tempFilters) state.tempFilters = JSON.parse(JSON.stringify(state.filters));
    return '<div class="overlay'+(open?' open':'')+'" onclick="closeFilters()"></div>'+
      '<div class="sheet'+(open?' open':'')+'" role="dialog" aria-label="Filtros">'+
        '<div class="sheet-handle"></div>'+
        '<div class="sheet-head"><h3>Filtrar produtos</h3><button class="icon-btn" onclick="closeFilters()">'+ICON.close+'</button></div>'+
        '<div class="sheet-body">'+
          renderFilterGroup("Tamanho","tamanho",TAMANHOS_PADRAO)+
          renderFilterGroup("Modelagem","modelagem",MODELAGENS)+
          renderFilterGroup("Cor / lavagem","corLavagem",CORES)+
        '</div>'+
        '<div class="sheet-foot">'+
          '<button class="btn btn-ghost" onclick="clearFilters()">Limpar</button>'+
          '<button class="btn btn-primary" onclick="applyFilters()">Aplicar filtros</button>'+
        '</div>'+
      '</div>';
  }

  /* ---------- cart sheet ---------- */
  function renderCartItem(it){
    var priceTxt = (it.preco!==null && it.preco!==undefined) ? money(it.preco) : null;
    var img = it.foto ? '<img src="'+escapeAttr(it.foto)+'" alt="">' : jeansIllustration(COR_HEX[it.corLavagem]);
    return '<div class="cart-row">'+
      '<div class="cart-thumb">'+img+'</div>'+
      '<div class="cart-row-info">'+
        '<div class="cn serif">'+escapeAttr(it.nome)+'</div>'+
        '<div class="cr">Ref. '+escapeAttr(it.referencia)+' · Tam. '+escapeAttr(it.tamanho)+'</div>'+
        (priceTxt ? '<div class="cp">'+priceTxt+' un.</div>' : '<div class="cp muted">Preço sob consulta</div>')+
        '<div class="qty-stepper">'+
          '<button onclick="changeCartQty(\''+it.cartId+'\',-1)" aria-label="Diminuir quantidade">'+ICON.minus+'</button>'+
          '<span>'+it.qty+'</span>'+
          '<button onclick="changeCartQty(\''+it.cartId+'\',1)" aria-label="Aumentar quantidade">'+ICON.plus+'</button>'+
        '</div>'+
      '</div>'+
      '<button class="icon-btn cart-remove-btn" onclick="removeFromCart(\''+it.cartId+'\')" aria-label="Remover item">'+ICON.trash+'</button>'+
    '</div>';
  }
  function renderCartSheet(){
    var open = state.cartOpen;
    var total = cartTotal();
    var body = state.cart.length
      ? state.cart.map(renderCartItem).join('')
      : '<div class="empty-state" style="padding:36px 10px;">'+ICON.cart+'<h3 class="serif">Seu carrinho está vazio</h3><p>Abra um produto e escolha o tamanho para adicionar ao carrinho.</p></div>';
    return '<div class="overlay'+(open?' open':'')+'" onclick="toggleCart()"></div>'+
      '<div class="sheet'+(open?' open':'')+'" role="dialog" aria-label="Carrinho">'+
        '<div class="sheet-handle"></div>'+
        '<div class="sheet-head"><h3>Seu carrinho'+(state.cart.length ? ' · '+cartCount()+(cartCount()===1?' item':' itens') : '')+'</h3><button class="icon-btn" onclick="toggleCart()">'+ICON.close+'</button></div>'+
        '<div class="sheet-body">'+body+'</div>'+
        (state.cart.length ? '<div class="sheet-foot cart-foot">'+
          '<div class="cart-total-row">'+(total!==null ? '<span>Total estimado</span><span class="ctv">'+money(total)+'</span>' : '<span class="muted">Alguns itens têm preço sob consulta</span>')+'</div>'+
          '<div class="cart-foot-actions">'+
            '<button class="btn btn-ghost btn-sm" onclick="clearCart()">Esvaziar</button>'+
            '<button class="btn btn-copper" onclick="checkoutWhatsApp()">'+ICON.whatsapp+' Finalizar no WhatsApp</button>'+
          '</div>'+
        '</div>' : '')+
      '</div>';
  }

  /* ---------- admin login ---------- */
  function renderAdminLogin(){
    return '<div class="view">'+
      renderHeader(true, "Área administrativa", false)+
      '<div style="min-height:70vh; display:flex; align-items:center; justify-content:center; padding:20px;">'+
        '<div style="width:100%; max-width:360px;">'+
          '<div style="text-align:center; margin-bottom:22px;">'+
            '<div style="width:52px;height:52px;border-radius:50%;background:var(--latte-100);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;color:var(--coffee-800)">'+ICON.lock+'</div>'+
            '<h2 class="serif" style="font-size:22px;color:var(--coffee-900);font-weight:520;">Entrar no painel</h2>'+
            '<p style="font-size:13.5px;color:var(--stone);margin-top:6px;">Acesso restrito para gerenciar o catálogo.</p>'+
          '</div>'+
          (state.adminError ? '<div class="error-text">'+state.adminError+'</div>' : '')+
          '<div class="field"><label for="admin-user">Usuário</label><input id="admin-user" type="text" autocomplete="username" placeholder="Email"></div>'+
          '<div class="field"><label for="admin-pass">Senha</label><input id="admin-pass" type="password" autocomplete="current-password" placeholder="••••••••" onkeydown="if(event.key===\'Enter\')submitLogin()"></div>'+
          '<button class="btn btn-primary" onclick="submitLogin()">Entrar</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  }

  /* ---------- admin dashboard ---------- */
  function renderAdminDashboard(){
    var q = normalize(state.adminSearch.trim());
    var list = state.products.filter(function(p){
      if(!q) return true;
      return normalize(p.nome).indexOf(q)>-1 || normalize(p.referencia).indexOf(q)>-1;
    });
    var rows = list.map(function(p){
      var img = p.foto ? '<img src="'+escapeAttr(p.foto)+'" alt="">' : jeansIllustration(COR_HEX[p.corLavagem]);
      return '<div class="admin-row">'+
        '<div class="admin-thumb">'+img+'</div>'+
        '<div class="admin-row-info"><div class="an serif">'+escapeAttr(p.nome)+'</div><div class="ar">Ref. '+escapeAttr(p.referencia)+' · '+p.tamanhos.length+' tamanhos</div></div>'+
        '<div class="admin-row-actions">'+
          '<button class="icon-btn" onclick="openEditProduct(\''+p.id+'\')" aria-label="Editar">'+ICON.edit+'</button>'+
          '<button class="icon-btn" onclick="askDelete(\''+p.id+'\')" aria-label="Excluir" style="color:var(--danger)">'+ICON.trash+'</button>'+
        '</div>'+
      '</div>';
    }).join('');

    return '<div class="view">'+
      renderHeader(true, "Painel administrativo", false)+
      '<div class="admin-toolbar shell" style="max-width:760px">'+
        '<div class="search-box">'+ICON.search+'<input type="text" placeholder="Buscar produto..." value="'+escapeAttr(state.adminSearch)+'" oninput="setAdminSearch(this.value)"></div>'+
        '<button class="btn btn-ghost btn-sm" onclick="adminLogout()">Sair</button>'+
      '</div>'+
      '<div class="admin-list">'+
        (list.length ? rows : '<div class="empty-state">'+ICON.box+'<h3 class="serif">Nenhum produto</h3><p>Cadastre a primeira peça do catálogo pelo botão abaixo.</p></div>')+
      '</div>'+
      '<div class="admin-fab"><button class="btn btn-copper" onclick="openNewProduct()">'+ICON.plus+' Adicionar</button></div>'+
    '</div>';
  }

  /* ---------- admin form ---------- */
  function selectOptions(list, selected){
    return list.map(function(o){ return '<option value="'+o+'"'+(o===selected?' selected':'')+'>'+o+'</option>'; }).join('');
  }
  function renderAdminForm(){
    var f = state.formState;
    var isEdit = !!state.editingId;
    var previewImg = f.foto ? '<img src="'+escapeAttr(f.foto)+'" alt="Pré-visualização" onerror="this.style.display=\'none\'">' : jeansIllustration(COR_HEX[f.corLavagem]);
    return '<div class="view">'+
      renderHeader(true, isEdit ? "Editar produto" : "Adicionar produto", false)+
      '<div style="max-width:560px;margin:0 auto;padding:18px 20px 60px;">'+
        (state.formError ? '<div class="error-text">'+state.formError+'</div>' : '')+

        '<div class="field"><label>Foto do produto</label>'+
          '<div class="photo-picker">'+
            '<div class="photo-preview">'+(state.formPhotoLoading ? '<div class="photo-loading">Processando foto…</div>' : previewImg)+
              (f.foto ? '<button type="button" class="photo-remove" onclick="clearFormPhoto()" aria-label="Remover foto">'+ICON.close+'</button>' : '')+
            '</div>'+
            '<label class="btn btn-ghost btn-sm photo-upload-btn">'+ICON.plus+' '+(f.foto ? 'Trocar foto' : 'Enviar foto do celular')+
              '<input type="file" accept="image/*" style="display:none" onchange="handleFileUpload(this)">'+
            '</label>'+
          '</div>'+
          '<div class="field-hint">Escolha uma foto da galeria do celular. Sem foto? A peça aparece com uma ilustração no lugar dela.</div>'+
        '</div>'+

        '<div class="field"><label for="f-nome">Nome do produto</label><input id="f-nome" type="text" placeholder="Ex: Calça Jeans Skinny Cintura Alta" value="'+escapeAttr(f.nome)+'" oninput="setFormField(\'nome\', this.value)"></div>'+
        '<div class="field"><label for="f-ref">Referência / código</label><input id="f-ref" type="text" placeholder="Ex: PJ-009" value="'+escapeAttr(f.referencia)+'" oninput="setFormField(\'referencia\', this.value)"></div>'+
        '<div class="field"><label for="f-descricao">Descrição</label><textarea id="f-descricao" placeholder="Conte sobre o tecido, o caimento, a lavagem e outros detalhes da peça." oninput="setFormField(\'descricao\', this.value)">'+escapeAttr(f.descricao)+'</textarea></div>'+

        '<div class="row2">'+
          '<div class="field"><label for="f-preco">Preço (opcional)</label><input id="f-preco" type="text" inputmode="decimal" placeholder="Ex: 189,90" value="'+escapeAttr(f.preco)+'" oninput="setFormField(\'preco\', this.value)"></div>'+
          '<div class="field"><label for="f-modelagem">Modelagem</label><select id="f-modelagem" onchange="setFormField(\'modelagem\', this.value)">'+selectOptions(MODELAGENS, f.modelagem)+'</select></div>'+
        '</div>'+
        '<div class="field"><label for="f-cor">Cor / lavagem</label><select id="f-cor" onchange="setFormField(\'corLavagem\', this.value); render()">'+selectOptions(CORES, f.corLavagem)+'</select></div>'+

        '<div class="field"><label>Tamanhos disponíveis</label>'+
          '<div class="filter-options">'+TAMANHOS_PADRAO.map(function(t){
            var on = f.tamanhos.indexOf(t)>-1;
            return '<button type="button" class="opt-chip'+(on?' on':'')+'" onclick="toggleFormSize(\''+t+'\')">'+t+'</button>';
          }).join('')+'</div>'+
        '</div>'+

        '<div class="toggle-row"><div><div class="t-label">Marcar como novidade</div><div class="t-sub">Aparece na categoria "Novidades"</div></div>'+
          '<label class="switch"><input type="checkbox" '+(f.novidade?'checked':'')+' onchange="toggleFormBool(\'novidade\')"><span class="track"></span></label></div>'+
        '<div class="toggle-row"><div><div class="t-label">Marcar como mais vendido</div><div class="t-sub">Aparece na categoria "Mais vendidos"</div></div>'+
          '<label class="switch"><input type="checkbox" '+(f.maisVendido?'checked':'')+' onchange="toggleFormBool(\'maisVendido\')"><span class="track"></span></label></div>'+

        '<div style="display:flex;gap:10px;margin-top:24px;">'+
          '<button class="btn btn-ghost" onclick="closeForm()">Cancelar</button>'+
          '<button class="btn btn-primary" onclick="saveProduct()">Salvar produto</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  }

  /* ---------- delete confirm ---------- */
  function renderDeleteConfirm(){
    var open = !!state.deleteConfirmId;
    var p = open ? state.products.find(function(x){return x.id===state.deleteConfirmId;}) : null;
    return '<div class="modal-center'+(open?' open':'')+'" onclick="if(event.target===this) cancelDelete()">'+
      '<div class="modal-card">'+
        '<h3>Excluir produto?</h3>'+
        '<p class="sub">'+(p ? 'Isso vai remover "'+escapeAttr(p.nome)+'" do catálogo permanentemente.' : '')+'</p>'+
        '<div style="display:flex;gap:10px;">'+
          '<button class="btn btn-ghost" onclick="cancelDelete()">Cancelar</button>'+
          '<button class="btn btn-danger" onclick="confirmDelete()">Excluir</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  }

  function renderToast(){
    if(!state.toast) return '<div class="toast-wrap"></div>';
    return '<div class="toast-wrap"><div class="toast show">'+ICON.check+state.toast+'</div></div>';
  }

  /* ============ MAIN RENDER ============ */
  function buildHTML(){
    var body = "";
    switch(state.view){
      case "detail": body = renderDetail(); break;
      case "admin-login": body = renderAdminLogin(); break;
      case "admin-dashboard": body = state.isAdmin ? renderAdminDashboard() : renderAdminLogin(); break;
      case "admin-form": body = state.isAdmin ? renderAdminForm() : renderAdminLogin(); break;
      default: body = renderCatalog();
    }
    return body + renderFilterSheet() + renderCartSheet() + renderDeleteConfirm() + renderToast();
  }

  var root = document.getElementById('root');
  function render(){
    var active = document.activeElement;
    var activeId = active && active.id;
    var selStart, selEnd;
    try{ selStart = active.selectionStart; selEnd = active.selectionEnd; }catch(e){}
    root.innerHTML = buildHTML();
    if(activeId){
      var el = document.getElementById(activeId);
      if(el && (el.tagName==='INPUT' || el.tagName==='TEXTAREA')){
        el.focus();
        try{ if(selStart!=null) el.setSelectionRange(selStart, selEnd); }catch(e){}
      }
    }
  }

  /* ============ INIT ============ */
  render();
  loadProducts();
  loadCart();

})();