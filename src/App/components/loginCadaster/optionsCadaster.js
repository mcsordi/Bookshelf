export const optionsMessages = (res) => {
  switch (res) {
    case undefined: {
      return;
    }
    case '': {
      return;
    }
    case `Busca não possui resultados`: {
      return <li className="absolute bottom-40 text-green-700 font-semibold">Novo usuário criado</li>;
    }
    default: {
      return <li className="absolute bottom-40 text-red-600 font-semibold">Email já existente</li>;
    }
  }
};
