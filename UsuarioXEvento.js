class UsuarioXEvento {
    constructor(idUsuario = 0, idEvento = 0) {
      this.IdUsuario = idUsuario;
      this.IdEvento = idEvento;
      this.DataCriacao = new Date();
    }
  
    get idUsuario() {
      return this.IdUsuario;
    }
  
    set idUsuario(value) {
      this.IdUsuario = value;
    }
  
    // ... Similar getters and setters for other properties
  }
  