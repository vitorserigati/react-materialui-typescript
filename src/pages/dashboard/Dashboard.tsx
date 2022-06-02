import { ListingToolBox } from '../../shared/components';
import { BasePageLayout } from '../../shared/layouts';


export const Dashboard = () => {

  return (
    <BasePageLayout titulo='Página Inicial'
      barraDeFerramentas={(
        <ListingToolBox
          showSearchInput
          newButtonText='Nova'
        />
      )}
    >
      Testando
    </BasePageLayout>
  );
};