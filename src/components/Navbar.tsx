import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { NavbarItemTypes } from '../type';
import { NAVBAR_ITEMS } from '../util/constants';
import UserOptionsDropdown from './UserOptionsDropdown';

interface IProps {
  className?: string;
}

const Navbar = ({ className }: IProps) => {
  const location = useLocation();

  return (
    <div
      className={classNames('bg-transparent flex items-center justify-between pl-8.5 pr-10.5', {
        [`${className}`]: className
      })}
    >
      <Link to="/">
        <img src="/images/navbar/sacurn-logo.svg" width={192} height={39} alt="sacurn" />
      </Link>
      <div className="flex items-center">
        <nav>
          <ul className="flex items-center justify-between 2xl:space-x-18 space-x-9">
            {NAVBAR_ITEMS?.map((item: NavbarItemTypes) => (
              <li
                key={item.name}
                className={classNames('', {
                  'border-b border-white': location.pathname === item.path
                })}
              >
                <Link to={item.path} className="text-white xl:text-xl 2xl:text-2xl font-normal">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center 2xl:gap-9 gap-5 2xl:ml-17 ml-12">
          <Link to="/cart">
            <img
              src="/images/navbar/cart.svg"
              alt="sacurn"
              className="2xl:w-9 w-7 2xl:h-9 h-7 cursor-pointer pt-1"
              width={35}
              height={34}
            />
          </Link>
          <UserOptionsDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
