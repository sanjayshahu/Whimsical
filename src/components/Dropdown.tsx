import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputAdornment } from '@mui/material';
import { ReactNode } from 'react';

type BasicSelectProps = {
    label: string;
    items: string[];
    icon:ReactNode
  };

export default function BasicSelect({ label,icon, items }: BasicSelectProps) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      {/* <InputLabel id="custom-select-label">{label}</InputLabel> */}
      <Select
        labelId="custom-select-label"
        id="custom-select"
        value={label}
        label={label}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
           {icon} {label}
          </InputAdornment>
        }
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  
    </Box>
  );
}
