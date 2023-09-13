import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp';
import classNames from 'classnames';

type SortProps = {
  isLowToHight: boolean;
  onSortChange: () => void;
};

function Sort(props: SortProps) {
  const { isLowToHight, onSortChange } = props;

  return (
    <div className="text-white cursor-pointer" onClick={onSortChange}>
      Sort: Low to High
      <span>
        <KeyboardArrowDownIcon
          className={classNames({
            'scale-y-[-1]': isLowToHight
          })}
        />
      </span>
    </div>
  );
}

export default Sort;
