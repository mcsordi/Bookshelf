import FormPass from '../components/FormPass';
import ImageProfile from '../components/ImageProfile';
import Pattern from '../components/Pattern';

import Text from '../Text';

export const displayState = {
  changePass: (
    <Pattern title={`Trocar Senha`}>
      <FormPass />
    </Pattern>
  ),
  changePhoto: (
    <Pattern title={`Alterar foto`}>
      <ImageProfile />
    </Pattern>
  ),
  useTerms: (
    <Pattern title={`Termo de uso`}>
      <Text />
    </Pattern>
  ),
};
