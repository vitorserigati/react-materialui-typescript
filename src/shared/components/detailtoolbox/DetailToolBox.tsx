import { Button, Icon, Paper, useTheme, Box, Divider, Skeleton } from '@mui/material';

interface IDetailToolBoxProps{
  textNewButton?: string;
  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showBackSaveButton?: boolean;
  showSaveButton?: boolean;

  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showBackSaveButtonLoading?: boolean;
  showSaveButtonLoading?: boolean;

  onClickNewButton?: () => void;
  onClickBackButton?: () => void;
  onClickDeleteButton?: () => void;
  onClickBackSaveButton?: () => void;
  onClickSaveButton?: () => void;
}

export const DetailToolBox: React.FC<IDetailToolBoxProps> = ({
  textNewButton= 'Novo',
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showBackSaveButton = false,
  showNewButton = true,
  
  onClickNewButton,
  onClickBackButton,
  onClickDeleteButton,
  onClickBackSaveButton,
  onClickSaveButton,

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showBackSaveButtonLoading = false,
  showSaveButtonLoading = false
}) => {
  const theme = useTheme();
  
  return(
    <Box 
      height={theme.spacing(5)} 
      marginX={1} 
      padding={1} 
      paddingX={2} 
      display='flex' 
      gap={1} 
      alignItems='center' 
      component={Paper}
    >

      {(showSaveButton && !showSaveButtonLoading) &&(<Button
        variant='contained'
        color='primary'
        disableElevation
        onClick={onClickSaveButton}            
        startIcon={<Icon>save</Icon>}
      >
        Salvar</Button>)}

      { showSaveButtonLoading && (<Skeleton width={109} height={60}/>)}

      {(showBackSaveButton && !showBackSaveButtonLoading) && (<Button
        variant='outlined'
        color='primary'
        disableElevation 
        onClick={onClickBackSaveButton}           
        startIcon={<Icon>save</Icon>}
      >
        Salvar e Voltar </Button>)}

      { showBackSaveButtonLoading && (<Skeleton width={179} height={60}/>)}
      
      {(showDeleteButton && !showDeleteButtonLoading) && (<Button
        variant='outlined'
        color='primary'
        disableElevation
        onClick={onClickDeleteButton}            
        startIcon={<Icon>delete</Icon>}
      >
        Apagar </Button>)}

      { showDeleteButtonLoading && (<Skeleton width={112} height={60}/>)}

      {(showNewButton && !showNewButtonLoading) && (<Button
        variant='outlined'
        color='primary'
        disableElevation
        onClick={onClickNewButton}            
        startIcon={<Icon>add</Icon>}
      >
        {textNewButton} </Button>)}

      {showNewButtonLoading && (<Skeleton width={97} height={60}/>)}
      

      <Divider variant='middle' orientation='vertical'/>
      
      {(showBackButton && !showBackButtonLoading) && (<Button
        variant='outlined'
        color='primary'
        disableElevation
        onClick={onClickBackButton}            
        startIcon={<Icon>arrow_back</Icon>}
      >
        Voltar </Button>)}

      { showBackButtonLoading && (<Skeleton width={111} height={60}/>)}

    </Box>
  );
};