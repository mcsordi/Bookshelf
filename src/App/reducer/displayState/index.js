import FormPass from '../components/FormPass';
import Pattern from '../components/Pattern';

import Text from '../Text';

export const displayState = {
  changePass: (
    <Pattern title={`Trocar Senha`}>
      <FormPass />
    </Pattern>
  ),
  changePhoto: <Pattern title={`Alterar foto`} />,
  useTerms: (
    <Pattern title={`Termo de uso`}>
      <Text />
    </Pattern>
  ),
};
