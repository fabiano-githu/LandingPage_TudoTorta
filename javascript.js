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