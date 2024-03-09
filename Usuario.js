class Evento {
    constructor(
        id = 0,
        dataInicial = new Date(),
        dataFinal = new Date(),
        nome = "",
        endereco = "",
        categoria = "",
        descricao = ""
    ) {
      this.Id = id;
      this.DataInicial = dataInicial;
      this.DataFinal = dataFinal;
      this.Nome = nome;
      this.Endereco = endereco;
      this.Categoria = categoria;
      this.Descricao = descricao;
    }
  
    get id() {
      return this.Id;
    }
  
    set id(value) {
      this.Id = value;
    }
  
  }
  