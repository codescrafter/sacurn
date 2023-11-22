import { Fragment } from 'react';

import { RatingStar } from './Star';

type CustomRatingProps = {
  count: number;
};

const CustomRating = (props: CustomRatingProps) => {
  const { count } = props;
  const rating = Array.from({ length: count }, (_, i) => i + 1);
  const findLength = 5 - rating.length;
  let newRating: number[] = [];
  if (findLength > 0) {
    newRating = Array.from({ length: findLength }, (_, i) => i + 1);
  }

  return (
    <Fragment>
      {rating.map((_, index) => {
        return <RatingStar key={index} color="#FACF10" />;
      })}
      {newRating.map((_, index) => {
        return <RatingStar key={index} color="#E5E5E5" />;
      })}
    </Fragment>
  );
};

export default CustomRating;
