import Rating from '@mui/material/Rating';

type CustomRatingProps = {
  count: number;
};

const CustomRating = (props: CustomRatingProps) => {
  const { count } = props;

  return <Rating value={count} size="small" />;
};

export default CustomRating;
