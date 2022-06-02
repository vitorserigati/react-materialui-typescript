import { DetailToolBox} from '../../shared/components';
import { BasePageLayout } from '../../shared/layouts';


export const Dashboard = () => {

  return (
    <BasePageLayout titulo='Página Inicial'
      barraDeFerramentas={(
        <DetailToolBox
          showBackSaveButton
                    
        />
          
      )}
    >
      
      Testando
    </BasePageLayout>
  );
};