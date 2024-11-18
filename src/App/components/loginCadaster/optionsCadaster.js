export const optionsMessages = (res) => {
  switch (res) {
    case undefined: {
      return;
    }
    case '': {
      return;
    }
    case `Busca não possui resultados`: {
      return <div className="text-green-700 border-b-2 font-semibold">Novo usuário criado</div>;
    }
    default: {
      return <div className="text-red-600 border-b-2 font-semibold">Email já existente</div>;
    }
  }
};
