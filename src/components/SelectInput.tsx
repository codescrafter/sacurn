import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/system';

interface IProps {
  label: string;
  options: { name: string; value: string }[];
  value: string | undefined;
  handleChange: (value: string | undefined) => void;
}

const SelectField = ({ label, value, options, handleChange }: IProps) => {
  return (
    <FormControl
      sx={{
        width: '147px',
        '& .MuiInputBase-input': {
          color: '#fff'
        }
      }}
      size="small"
    >
      <Select
        value={value}
        IconComponent={KeyboardArrowDownIcon}
        onChange={(event: SelectChangeEvent) => {
          handleChange(event.target.value);
        }}
        sx={{
          backgroundColor: '#FFFFFF4D',
          borderRadius: '10px',
          fontSize: '17px',
          fontWeight: 700,
          height: '34px',
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
          '& .MuiSelect-select .notranslate::after': {
            content: `"${label || 'Location'}"`,
            opacity: 1,
            color: '#fff',
            fontWeight: 700,
            fontSize: '17px'
          }
        }}
        // changed menu item color
        MenuProps={{
          sx: {
            marginTop: '10px',
            '& .MuiMenuItem-root': {
              left: '0 !important',
              width: '200px',
              color: '#545454',
              fontWeight: 700,
              fontSize: '14px',
              backgroundColor: '#FFFFFF4D',
              padding: '5px 0'
            },
            // remove background color from hover state
            '& .MuiMenuItem-root:hover': {
              backgroundColor: 'transparent'
            },
            // remove background color from selected state
            '& .Mui-selected': {
              backgroundColor: 'transparent'
            },
            '& .MuiMenu-paper': {
              padding: '0 1rem',
              border: '2px solid #DFDFDF',
              borderRadius: '5px'
            }
          }
        }}
      >
        <MenuItem
          value={undefined}
          sx={{
            '&.MuiMenuItem-root.Mui-selected': {
              backgroundColor: 'transparent'
            }
          }}
        >
          All
        </MenuItem>
        <Box sx={{ height: '2px', backgroundColor: '#CACACA', margin: '5px 0', borderRadius: '5px' }} />
        {options.map((option) => {
          return (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                '&.MuiMenuItem-root.Mui-selected': {
                  backgroundColor: 'transparent'
                }
              }}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectField;
