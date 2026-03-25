document.addEventListener("DOMContentLoaded", () => {

  const produtos = [
    {
      nome: "Coxinha",
      preco: "R$ 5,00",
      img: "imagens/coxinha-de-frango-jpeg.webp",
      desc: "Coxinha de frango crocante e deliciosa"
    },
    {
      nome: "Torta Salgada de Pão de forma",
      preco: "R$ 6,00",
      img: "imagens/WhatsApp Image 2024-03-24 at 20.37.30.jpeg",
      desc: "Torta cremosa e saborosa"
    },
    {
      nome: "Pastel de Forno (Frango)",
      preco: "R$ 6,00",
      img: "imagens/maxresdefault-2022-10-03T105917.680-removebg-preview.png",
      desc: "Pastel assado delicioso"
    },
    {
      nome: "Pastel de Forno (Carne Seca)",
      preco: "R$ 6,00",
      img: "imagens/pastel-assado-de-carne-seca-e-requeijao-40306-350x230.jpg",
      desc: "Carne seca com recheio especial"
    },

    {
      nome: "Pastel de Forno (Carne Seca)",
      preco: "R$ 6,00",
      img: "imagens/pastel-assado-de-carne-seca-e-requeijao-40306-350x230.jpg",
      desc: "Carne seca com recheio especial"
    }
  ];

  function renderProdutos() {
    const container = document.getElementById("lista-produtos");
    container.innerHTML = "";

    produtos.forEach(produto => {

      const card = document.createElement("div");
      card.className = "col-12 col-sm-6 col-md-4 col-lg-3";

      card.innerHTML = `
        <div class="card card-custom h-100">

          <img src="${produto.img}" class="card-img-top" alt="${produto.nome}">

          <div class="card-body text-center d-flex flex-column">
            <h5>${produto.nome}</h5>
            <p class="text-success fw-bold">${produto.preco}</p>
            <p class="small">${produto.desc}</p>

            <div class="mt-auto d-flex gap-2">

              <a href="https://wa.me/5599999999999?text=Quero comprar ${produto.nome}"
                 class="btn btn-comprar w-50" target="_blank">
                Comprar
              </a>

              <button class="btn btn-detalhes w-50"
                data-bs-toggle="modal"
                data-bs-target="#modalProduto"
                data-nome="${produto.nome}"
                data-preco="${produto.preco}"
                data-img="${produto.img}"
                data-desc="${produto.desc}">
                Detalhes
              </button>

            </div>
          </div>

        </div>
      `;

      container.appendChild(card);
    });
  }

  /* ================= MODAL ================= */
  const modal = document.getElementById("modalProduto");

  if (modal) {
    modal.addEventListener("show.bs.modal", event => {
      const btn = event.relatedTarget;

      modal.querySelector(".modal-title").textContent = btn.dataset.nome;
      modal.querySelector(".modal-preco").textContent = btn.dataset.preco;
      modal.querySelector(".modal-img").src = btn.dataset.img;
      modal.querySelector(".modal-desc").textContent = btn.dataset.desc;

      const whatsapp = document.getElementById("modalWhatsapp");
      if (whatsapp) {
        whatsapp.href = `https://wa.me/5599999999999?text=Quero comprar ${btn.dataset.nome}`;
      }
    });
  }

  renderProdutos();

});

// Aguarda todo o HTML carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function() {

  // Seleciona o formulário pelo ID
  const form = document.getElementById("formPedido");

  // Escuta o evento de envio do formulário
  form.addEventListener("submit", function(e) {

    // Impede o comportamento padrão (recarregar a página)
    e.preventDefault();

    // =============================
    // CAPTURANDO OS VALORES DOS CAMPOS
    // =============================

    const nome = document.getElementById("nome").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const sabor = document.getElementById("sabor").value;
    const tamanho = document.getElementById("tamanho").value;
    const mensagem = document.getElementById("mensagem").value;

    const erro = document.getElementById("erroForm");

    if (!nome || !whatsapp) {
      erro.classList.remove("d-none");

      if (!nome) {
        document.getElementById("nome").style.border = "2px solid red";
      }

      if (!whatsapp) {
        document.getElementById("whatsapp").style.border = "2px solid red";
      }

      return;
    } else {
      erro.classList.add("d-none");
    }

    // =============================
    // MONTANDO A MENSAGEM
    // =============================

    const texto =
`🍰 *NOVO PEDIDO* 🍰

👤 Nome: ${nome}
📱 WhatsApp: ${whatsapp}

🥧 Sabor: ${sabor}
📏 Tamanho: ${tamanho}

📝 Observações:
${mensagem}`;

    // =============================
    // NÚMERO QUE VAI RECEBER A MENSAGEM
    // IMPORTANTE: formato com DDD + país (55 = Brasil)
    // =============================

    const numero = "5521968061820"; // 🔴 TROQUE PELO SEU NÚMERO

    // =============================
    // CRIANDO A URL DO WHATSAPP
    // encodeURIComponent evita erro com acentos e espaços
    // =============================

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    // =============================
    // ABRE O WHATSAPP EM UMA NOVA ABA
    // =============================

    window.open(url, "_blank");

  });

});