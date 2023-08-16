import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IProps {
  value: string;
  label: string;
  handleChange: (value: string) => void;
}

const SelectField = ({ value, label, handleChange }: IProps) => {
  return (
    <FormControl sx={{ minWidth: 220 }} size="small">
      <Select
        value={value}
        IconComponent={KeyboardArrowDownIcon}
        onChange={(event: SelectChangeEvent) => {
          handleChange && handleChange(event.target.value);
        }}
        sx={{
          backgroundColor: '#FFFFFF4D',
          borderRadius: '5px',
          fontSize: '16px',
          fontWeight: 700,
          '& .MuiSvgIcon-root': { color: '#fff' },
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: 0
          },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 0
          },
          '& legend': { display: 'none' },
          '& fieldset': { top: 0 },
          // ignore eslint
          // eslint-disable-next-line
          '& .MuiSelect-select .notranslate::after': 'Select'
            ? {
                content: `"${label || 'Location'}"`,
                opacity: 1,
                color: '#fff',
                fontWeight: 600,
                fontSize: '14px'
              }
            : {}
        }}
        // changed menu item color
        MenuProps={{
          sx: {
            '& .MuiMenuItem-root': {
              color: '#1076B4',
              fontWeight: 700,
              fontSize: '16px',
              backgroundColor: '#FFFFFF4D'
            }
          }
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectField;
