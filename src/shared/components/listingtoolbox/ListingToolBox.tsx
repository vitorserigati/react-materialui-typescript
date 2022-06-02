import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IToolBoxProps {
  searchText?: string;
  showSearchInput?: boolean;
  changeSearchText?: (newText: string) => void;
  newButtonText?: string;
  showNewButton?: boolean;
  onNewButtonClick?: () => void;
}

export const ListingToolBox: React.FC<IToolBoxProps> = ({
  newButtonText = 'Novo',
  showNewButton = true,
  onNewButtonClick,
  searchText = '', 
  showSearchInput = false, 
  changeSearchText }) => {
  const theme = useTheme();
  return (
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

      {showSearchInput && (
        <TextField
          size='small'
          value={searchText}
          onChange={(e) => changeSearchText?.(e.target.value)}
          placeholder= 'Pesquisar...'
          fullWidth        
        />
      )}

      <Box
        flex={1}
        display='flex'
        justifyContent='end'
      >
        {showNewButton &&(
          <Button
            variant='contained'
            color='primary'
            disableElevation
            onClick={onNewButtonClick}
            endIcon={<Icon>add</Icon>}
          >
            {newButtonText} </Button>
        )}

      </Box>
    </Box>
  );
};