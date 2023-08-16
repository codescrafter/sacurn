import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

// interface IProps {
//   value?: number | null;
//   handleChange?: (value: number | null) => void;
// }

const CustomRating = () => {
  const [value, setValue] = useState<number | null>(4);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          '& .MuiRating-iconFilled': {
            color: '#FFC107'
          }
        }}
      />
    </Box>
  );
};

export default CustomRating;
