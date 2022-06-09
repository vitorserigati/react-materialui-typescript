import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailToolBox } from '../../shared/components';
import { BasePageLayout } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'new' } = useParams<'id'>();
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');
  useEffect(() => {
    if (id != 'new') {
      setIsLoading(true);
      PessoasService.getById(Number(id)).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          navigate('/pessoas');
        } else {
          setNome(result.nomeCompleto);
          console.log(result);
        }
      });
    }
  }, [id]);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log('save');
  };
  const handleDelete = (id: number) => {
    if (confirm(`Realmente deseja apagar ${nome} dos registros?`)) {
      PessoasService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert('Registro Apagado. Atualize a página para conferir.');
          navigate('/pessoas');
        }
      });
    }
  };

  return (
    <BasePageLayout
      titulo={id === 'new' ? 'Novo Registro' : `Detalhes de ${nome}`}
      barraDeFerramentas={
        <DetailToolBox
          showNewButton={id !== 'new'}
          showBackSaveButton
          showDeleteButton={id !== 'new'}
          onClickNewButton={() => navigate('/pessoas/detalhe/new')}
          onClickSaveButton={handleSave}
          onClickBackButton={() => navigate('/pessoas')}
          onClickDeleteButton={() => handleDelete(Number(id))}
          onClickBackSaveButton={handleSave}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}
      <></>
    </BasePageLayout>
  );
};
