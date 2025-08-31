const modal = document.getElementById("clienteModal");
const btn = document.getElementById("openModal");
const close = document.getElementById("closeModal");

btn.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

// Exemplo de submit (aqui só impede reload e mostra os dados no console)
document.getElementById("formCliente").addEventListener("submit", function(e){
e.preventDefault();
const nome = document.getElementById("nome").value;
const local = document.getElementById("local").value;
const numero = document.getElementById("numero").value;
console.log("Cliente cadastrado:", nome, local, numero);
modal.style.display = "none"; // fecha modal
this.reset(); // limpa formulário
});




// =======================
// Modal Editar Cliente
// =======================
const cancelarEditar = document.getElementById("cancelarEditar");
const editarModal = document.getElementById("editarModal");
const closeEditar = document.getElementById("closeEditar");
const formEditarCliente = document.getElementById("formEditarCliente");

// Abrir modal de edição ao clicar no ícone de editar
document.querySelectorAll(".fa-edit").forEach((btn, index) => {
    btn.onclick = (e) => {
        e.preventDefault();

        // Preencher o modal com os dados da linha clicada
        const row = btn.closest("tr");
        document.getElementById("editarNome").value = row.children[0].textContent;
        document.getElementById("editarLocal").value = row.children[1].textContent;
        document.getElementById("editarNumero").value = row.children[2].textContent;

        // Salvar referência da linha para atualizar depois
        formEditarCliente.dataset.rowIndex = index;

        editarModal.style.display = "block";
    };
});

// Fechar modal
closeEditar.onclick = () => editarModal.style.display = "none";
window.onclick = (e) => { if (e.target == editarModal) editarModal.style.display = "none"; }

// Fechar modal ao clicar no cancelar
cancelarEditar.onclick = () => editarModal.style.display = "none";


// =======================
// Modal Excluir Cliente
// =======================
const excluirModal = document.getElementById("excluirModal");
const closeExcluir = document.getElementById("closeExcluir");
const confirmarExcluir = document.getElementById("confirmarExcluir");
const cancelarExcluir = document.getElementById("cancelarExcluir");

let rowToDelete = null;

// Abrir modal de exclusão ao clicar no ícone de lixeira
document.querySelectorAll(".fa-trash").forEach((btn, index) => {
    btn.onclick = (e) => {
        e.preventDefault();
        rowToDelete = btn.closest("tr");
        excluirModal.style.display = "block";
    };
});

// Fechar modal
closeExcluir.onclick = () => excluirModal.style.display = "none";
cancelarExcluir.onclick = () => excluirModal.style.display = "none";
window.onclick = (e) => { if (e.target == excluirModal) excluirModal.style.display = "none"; }

// Confirmar exclusão
confirmarExcluir.onclick = () => {
    if(rowToDelete){
        console.log("Cliente excluído:", rowToDelete.children[0].textContent);
        rowToDelete.remove();
        rowToDelete = null;
    }
    excluirModal.style.display = "none";
};

