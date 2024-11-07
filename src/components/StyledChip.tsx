import React from 'react';
import { Chip, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Define the props type for the CustomChip component
type CustomChipProps = {
  
  icon: React.ReactNode;
  status: 'completed' | 'in-progress' | 'error' | 'pending'; // You can expand the status types if needed
  num:number
};

// StyledChip using a function to receive props without explicitly declaring 'theme'
const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'status', // Prevent passing 'status' to the DOM element
})<{ status: string }>(({ theme, status }) => ({
  padding: theme.spacing(1, 3),
  position: 'relative',
  overflow: 'visible',
  backgroundColor:
    status === 'completed'
      ? theme.palette.success.main
      : status === 'error'
      ? theme.palette.error.main
      : status === 'in-progress'
      ? theme.palette.info.main
      : theme.palette.warning.main,
  color: theme.palette.common.white,
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
  },
  // V shape on the left
  '&::before': {
    left: 0,
    borderTop: '12px solid transparent',
    borderBottom: '12px solid transparent',
    borderRight: `12px solid ${status === 'completed' ? theme.palette.success.main : 
                               status === 'error' ? theme.palette.error.main : 
                               status === 'in-progress' ? theme.palette.info.main : 
                               theme.palette.warning.main}`,
    boxShadow: `-6px 0 0 ${theme.palette.background.paper}`, 
  },
  // Right-pointed arrow
  '&::after': {
    right: 0,
    borderTop: '12px solid transparent',
    borderBottom: '12px solid transparent',
    borderLeft: `12px solid ${status === 'completed' ? theme.palette.success.main : 
                              status === 'error' ? theme.palette.error.main : 
                              status === 'in-progress' ? theme.palette.info.main : 
                              theme.palette.warning.main}`,
  },
}));




const CustomChip: React.FC<CustomChipProps> = ({  icon, status,num}) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <StyledChip
        status={status} // Pass status for styling
        label={
          <Box display="flex" alignItems="center" gap={1}>
            {icon}
            {num}
          </Box>
        }
      />
    </Box>
  );
};

export default CustomChip;
