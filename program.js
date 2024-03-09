// Função para exibir o menu principal
function exibirMenuPrincipal() {
    console.log("=========================");
    console.log("=  Menu Principal   =");
    console.log("=========================");
    console.log("");
    console.log("Escolha sua opção:");
    console.log("1) Listagem de Eventos");
    console.log("2) Cadastro de Eventos");
    console.log("3) Cadastro de Usuário");
    console.log("4) Login");
  
    if (usuarioLogado != null) {
      console.log("5) Participar de evento");
      console.log("6) Cancelar participação de evento");
    }
  
    var opcao = prompt().trim();
  
    if (opcao === "1") {
      listarEventos();
    } else if (opcao === "2") {
      cadastrarEvento();
    } else if (opcao === "3") {
      cadastrarUsuario();
    } else if (opcao === "4") {
      realizarLogin();
    } else if (opcao === "5" && usuarioLogado != null) {
      participarDeEvento();
    } else if (opcao === "6" && usuarioLogado != null) {
      cancelarParticipacao();
    } else {
      console.log("Opção inválida.");
      console.log("");
      exibirMenuPrincipal();
    }
  }
  
  // Função para listar eventos
  function listarEventos() {
    console.log("Listagem de Eventos:");
  
    carregarDados();
  
    var eventosPassados = [];
    var eventosPresentes = [];
    var eventosFuturos = [];
  
    filtrarEventos(eventosPassados, eventosPresentes, eventosFuturos);
  
    if (eventosPassados.length > 0) {
      console.log("Eventos Passados:");
  
      for (var evento of eventosPassados) {
        console.log(`${evento.dataInicial.toLocaleString()} ${evento.nome}`);
        console.log(`        ${evento.descricao}`);
        console.log("");
      }
    }
  
    if (eventosPresentes.length > 0) {
      console.log("Eventos ocorrendo AGORA:");
  
      for (var evento of eventosPresentes) {
        console.log(`${evento.dataInicial.toLocaleString()} ${evento.nome}`);
        console.log(`        ${evento.descricao}`);
        console.log("");
      }
    }
  
    if (eventosFuturos.length > 0) {
      console.log("Eventos no futuro:");
  
      for (var evento of eventosFuturos) {
        console.log(`${evento.dataInicial.toLocaleString()} ${evento.nome}`);
        console.log(`        ${evento.descricao}`);
        console.log("");
      }
    }
  
    if (
      eventosPassados.length === 0 &&
      eventosPresentes.length === 0 &&
      eventosFuturos.length === 0
    ) {
      console.log("Nenhum evento cadastrado.");
    }
  }
  
  // Função para cadastrar um evento
  function cadastrarEvento() {
    console.log("=========================");
    console.log("= Cadastro de Eventos =");
    console.log("=========================");
    console.log("");
}
  
    var novoEvento = new Evento();
  
    console.write("Nome do Evento: ");
  
    novoEvento.nome = prompt();
  
    console.write("Descrição do Evento: ");
  
    novoEvento.descricao = prompt();
  
    var dataDigitada = new Date();
  
    while (dataDigitada.getTime() === 0) {
      dataDigitada = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        new Date().getHours(),
        0,
        0
      );
  
      console.write("Data Inicial: " + dataDigitada.toLocaleString() + " ");
  
      var valorDigitado = prompt();
  
      if (valorDigitado !== "") {
        try {
          dataDigitada = new Date(valorDigitado);
          novoEvento.dataInicial = dataDigitada;
        } catch (e) {
          console.log("Data inválida.");
        }
      } else {
        novoEvento.dataInicial = dataDigitada;
      }
    }
  
    dataDigitada = new Date();
  
    while (dataDigitada.getTime() === 0) {
      dataDigitada
    }