import Slider from '@mui/material/Slider';

interface RangeSliderProps {
  value?: number;
}

const RangeSlider = ({ value }: RangeSliderProps) => {
  return (
    <Slider
      disabled
      defaultValue={value || 90}
      aria-label="Default"
      valueLabelDisplay="auto"
      sx={{
        '& .MuiSlider-thumb': {
          width: 0,
          height: 0,
          backgroundColor: 'transparent'
        },

        '& .MuiSlider-valueLabel': {
          color: '#fff',
          backgroundColor: 'transparent'
        },
        '& .MuiSlider-track': {
          color: '#FFD600',
          height: 8
        },
        '& .MuiSlider-rail': {
          color: '#B3B4B4',
          height: 8
        }
      }}
    />
  );
};

export default RangeSlider;
