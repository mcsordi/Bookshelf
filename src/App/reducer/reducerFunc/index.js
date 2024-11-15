export const reducer = (state, action) => {
  switch (action) {
    case 'Trocar Senha': {
      return { ...state, element: state.changePass };
    }
    case 'Alterar foto': {
      return { ...state, element: state.changePhoto };
    }
    case 'Termo de uso': {
      return {
        ...state,
        element: state.useTerms,
      };
    }
  }
};
