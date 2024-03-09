const bancoDeDados = {
    usuarios: [],
    eventos: [],
    usuariosXEventos: [],
  
    get diretorioDeDados() {
      const diretorio = process.cwd();
      return path.join(diretorio, "data");
    },
  
    get caminhoDoArquivoDeEventos() {
      return path.join(this.diretorioDeDados, "events.data");
    },
  
    get caminhoDoArquivoDeUsuarios() {
      return path.join(this.diretorioDeDados, "users.data");
    },
  
    get caminhoDoArquivoDeUsuariosXEventos() {
      return path.join(this.diretorioDeDados, "usersXevents.data");
    },

    carregarDados() {
      let conteudo = "";
  
      try {
        conteudo = fs.readFileSync(this.caminhoDoArquivoDeEventos, "utf-8");
        this.eventos = JSON.parse(conteudo);
      } catch {}
  
      try {
        conteudo = fs.readFileSync(this.caminhoDoArquivoDeUsuarios, "utf-8");
        this.usuarios = JSON.parse(conteudo);
      } catch {}
  
      try {
        conteudo = fs.readFileSync(this.caminhoDoArquivoDeUsuariosXEventos, "utf-8");
        this.usuariosXEventos = JSON.parse(conteudo);
      } catch {}
    },
  
    salvarEvento(evento) {
      if (this.eventos.length === 0) {
        this.carregarDados();
      }
  
      if (evento.id === 0) {
        // novo evento
        evento.id = this.eventos.length + 1;
        this.eventos.push(evento);
  
        const conteudo = JSON.stringify(this.eventos, {
          indent: true,
        });
  
        fs.writeFileSync(this.caminhoDoArquivoDeEventos, conteudo);
      } else {
        // atualizar evento
      }
    },
  
    salvarUsuario(usuario) {
      if (this.usuarios.length === 0) {
        this.carregarDados();
      }
  
      if (usuario.id === 0) {
        // novo usuario
        usuario.id = this.usuarios.length + 1;
        this.usuarios.push(usuario);
  
        const conteudo = JSON.stringify(this.usuarios, {
          indent: true,
        });
  
        fs.writeFileSync(this.caminhoDoArquivoDeUsuarios, conteudo);
      } else {
        // atualizar usuario
      }
    },
  
    realizarLogin(nomeDeUsuario, senha) {
      if (this.usuarios.length === 0) {
        this.carregarDados();
      }
  
      for (const usuario of this.usuarios) {
        if (usuario.nomeDeUsuario === nomeDeUsuario && usuario.senha === senha) {
          return usuario;
        }
      }
  
      return null;
    },
  
    salvarUsuarioXEvento(usuario, evento) {
      const novaParticipacao = {
        idUsuario: usuario.id,
        idEvento: evento.id,
      };
  
      for (const participacao of this.usuariosXEventos) {
        if (
          participacao.idUsuario === novaParticipacao.idUsuario &&
          participacao.idEvento === novaParticipacao.idEvento
        ) {
          throw new Error("P_EX");
        }
      }
  
      this.usuariosXEventos.push(novaParticipacao);
  
      const conteudo = JSON.stringify(this.usuariosXEventos, {
        indent: true,
      });
  
      fs.writeFileSync(this.caminhoDoArquivoDeUsuariosXEventos, conteudo);
    },
  
    eventosQueUsuarioVai(usuario) {
      const lista = [];
  
      for (const participacao of this.usuariosXEventos) {
        if (participacao.idUsuario === usuario.id) {
          for (const evento of this.eventos) {
            if (evento.id === participacao.idEvento) {
              lista.push(evento);
            }
          }
        }
      }
  
      return lista;
    },
  
    excluirUsuarioXEvento(usuario, evento) {
      let indiceParaExcluir = -1;
  
      for (let i = 0; i < this.usuariosXEventos.length; i++) {
        if (
          this.usuariosXEventos);
      }
    }
}