import React from 'react';
import Box from '@mui/material/Box';
import Dropdown from './Dropdown'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ReactNode } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CustomChip from './StyledChip';
import Paper from '@mui/material/Paper';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';


type ItemType = {
  icon: ReactNode;
  text: string;
  status: 'completed' | 'pending' | 'error' | 'in-progress';
  percentage: number;
  days: number;
  num: number;
};

const items: ItemType[] = [
  {
    icon: <AccessTimeIcon />,
    text: 'New',
    status: 'in-progress',
    percentage: 45,
    days: 5,
    num: 1,
  },
  {
    icon: <CheckCircleIcon />,
    text: 'Contact',
    status: 'completed',
    percentage: 100,
    days: 2,
    num: 2,
  },
  {
    icon: <ErrorIcon />,
    text: 'Upload Space',
    status: 'error',
    percentage: 0,
    days: 1,
    num: 3,
  },
  {
    icon: <HourglassEmptyIcon />,
    text: 'Estimate',
    status: 'pending',
    percentage: 20,
    days: 3,
    num: 4,
  },
  {
    icon: <AccessTimeIcon />,
    text: 'Sign Contract',
    status: 'in-progress',
    percentage: 65,
    days: 4,
    num: 5,
  },
  {
    icon: <CheckCircleIcon />,
    text: 'Payment',
    status: 'completed',
    percentage: 100,
    days: 6,
    num: 6,
  },
  {
    icon: <HourglassEmptyIcon />,
    text: 'Installation',
    status: 'pending',
    percentage: 10,
    days: 7,
    num: 7,
  },
  {
    icon: <ErrorIcon />,
    text: 'Completed',
    status: 'error',
    percentage: 0,
    days: 8,
    num: 8,
  },
  {
    icon: <AccessTimeIcon />,
    text: 'Feedback',
    status: 'in-progress',
    percentage: 35,
    days: 9,
    num: 9,
  },
];




const LeadPipeline: React.FC = () => {
  const [showMore, setShowMore] = useState('');

  const handleShowMoreChange = (event:any) => {
    setShowMore(event.target.value);
  };

  return (<><Box

    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      backgroundColor: '#FFF',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      marginBottom: 2,
      padding: { xs: 1, sm: 2 },
      width: '100%',
      justifyContent: 'space-evenly'
    }}
  >
    <Dropdown label={"sort by"} icon={<SwapVertIcon />} items={['Ascending',
      'Descending']} />
    <Dropdown label={"filter"} icon={<FilterAltIcon />}
      items={[
        "Category",
        "Price Range",
        "Brand",
        "Rating",
        "Availability",
        "Discount",
        "Location",
        "Color",
        "Size",
        "Material",
        "Features",
        "Condition",
        "Date Range",
        "Duration",
        "Provider",
        "Dietary Preferences",
        "Cuisine Type",
        "Delivery Options",
        "Tags",
        "User Ratings",
        "Order Status"
      ]} /><Dropdown label={""} icon={<CalendarMonthIcon />} items={[
        "2024-11-05",
        "2024-11-04",
        "2024-10-29 to 2024-11-05",
        "2024-10-06 to 2024-11-05",
        "2024-11-01 to 2024-11-30",
        "2024-10-01 to 2024-10-31",
        "2024-08-05 to 2024-11-05",
        "2024-01-01 to 2024-11-05",
        "2023-01-01 to 2023-12-31"
      ]
      } />
  </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        backgroundColor: '#FFF',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: 2,
        padding: { xs: 1, sm: 2 },
        width: '100%',
        justifyContent: 'space-evenly',
      }}
    >
      {items.map((item, index) => (
        <Box>
          <p>{item.text}</p>
          <CustomChip
            key={index}
            icon={item.icon}
            num={item.num}
            status={item.status}

          />
          {item.percentage}%{item.days}DAYS
        </Box>
      ))}
    </Box>



    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row', 
        backgroundColor: '#FFF',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: 2,
        padding: { xs: 1, sm: 2 },
        width: '100%',
        justifyContent: 'flex-start',
        gap: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          background: `linear-gradient(to bottom, white 50%, green 50%)`,
          width: '20%',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography><PhoneDisabledIcon /></Typography>
          <Typography>No Follow up</Typography>
        </Box>
      </Paper>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2
        }}
      >
        <Typography variant="h6">Brown's bathroom remodel</Typography>

        <Grid container spacing={1} sx={{ width: '100%', maxWidth: '400px' }}>
          <Grid item xs={6}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ marginRight: 1 }} />
              (907) 55-0101
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <MailIcon sx={{ marginRight: 1 }} />
              example@email.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ marginRight: 1 }} />
              Washington Ave Manchester, Kentucky 39495
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Show More</InputLabel>
              <Select
                value={showMore}
                onChange={handleShowMoreChange}
                label="Show More"
              >
                <MenuItem value="details">Details</MenuItem>
                <MenuItem value="history">History</MenuItem>
                <MenuItem value="contacts">Contacts</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>


      </Box>
    </Box>




  </>
  )
};

export default LeadPipeline;
