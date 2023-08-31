import Rating from '@mui/material/Rating';
import { useState } from 'react';

const CustomRating = () => {
  const [value, setValue] = useState<number | null>(4);

  return (
    <Rating
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      size="small"
    />
  );
};

export default CustomRating;
