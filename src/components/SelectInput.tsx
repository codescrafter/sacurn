import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IProps {
  label: string;
  options: { name: string; value: string }[];
  value: string | undefined;
  handleChange: (value: string | undefined) => void;
}

const SelectField = ({ label, value, handleChange }: IProps) => {
  return (
    <FormControl
      sx={{
        minWidth: {
          xs: '140px',
          sm: '140px',
          md: '140px',
          lg: '160px',
          xl: '220px'
        },
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
          '& .MuiSelect-select .notranslate::after': {
            content: `"${label || 'Location'}"`,
            opacity: 1,
            color: '#fff',
            fontWeight: 600,
            fontSize: '14px'
          }
        }}
        // changed menu item color
        MenuProps={{
          sx: {
            '& .MuiMenuItem-root': {
              color: '#545454',
              fontWeight: 700,
              fontSize: '16px',
              backgroundColor: '#FFFFFF4D',
              padding: '.5rem 0'
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
              padding: '.5rem 1rem'
            }
          }
        }}
      >
        <MenuItem
          value={undefined}
          sx={{
            borderBottom: '2px solid #CACACA',
            // remove background color from selected state
            '&.Mui-selected': {
              backgroundColor: 'transparent'
            }
          }}
        >
          All
        </MenuItem>
        {[
          { name: 'hello', value: 'hello' },
          { name: 'option1', value: 'option1' }
        ].map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectField;
