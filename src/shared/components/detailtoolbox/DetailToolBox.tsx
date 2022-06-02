import { Button, Icon, Paper, useTheme, Box, Divider, Skeleton, Typography, useMediaQuery, Theme } from '@mui/material';

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
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  
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
        {!smDown && (<Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
          
          Salvar

        </Typography>)}
      
      </Button>)}

      { showSaveButtonLoading && (<Skeleton width={109} height={60}/>)}

      {(showBackSaveButton && !showBackSaveButtonLoading && !smDown && !mdDown) && (<Button
        variant='outlined'
        color='primary'
        disableElevation 
        onClick={onClickBackSaveButton}           
        startIcon={<Icon>save</Icon>}
      >
        <Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
          
          Salvar e Voltar 

        </Typography>
      
      </Button>)}

      { (showBackSaveButtonLoading  && !smDown && !mdDown) && (<Skeleton width={179} height={60}/>)}
      
      {(showDeleteButton && !showDeleteButtonLoading) && (<Button
        variant='outlined'
        color='primary'
        disableElevation
        onClick={onClickDeleteButton}            
        startIcon={<Icon>delete</Icon>}
      >
        {!smDown && (<Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
          
          Apagar 

        </Typography>)}
      
      </Button>)}

      { showDeleteButtonLoading && (<Skeleton width={112} height={60}/>)}

      {(showNewButton && !showNewButtonLoading && !smDown && !mdDown) && (<Button
        variant='outlined'
        color='primary'
        disableElevation
        onClick={onClickNewButton}            
        startIcon={<Icon>add</Icon>}
      >
        <Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
          
          {textNewButton} 

        </Typography>
      
      </Button>)}

      {(showNewButtonLoading  && !smDown && !mdDown) && (<Skeleton width={97} height={60}/>)}
      

      {(showBackButton && (showBackSaveButton || showDeleteButton || showNewButton || showSaveButton)
      ) && 
      (<Divider variant='middle' orientation='vertical'/>)}
      
      {(showBackButton && !showBackButtonLoading) && (<Button
        variant='outlined'
        color='primary'
        disableElevation
        onClick={onClickBackButton}            
        startIcon={<Icon>arrow_back</Icon>}
      >
        {!smDown && (<Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
          
          Voltar 

        </Typography>)}
      
      </Button>)}

      { showBackButtonLoading && (<Skeleton width={111} height={60}/>)}

    </Box>
  );
};