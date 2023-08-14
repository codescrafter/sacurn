import classNames from 'classnames';
import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { NavbarItemTypes } from '../type';
import { NAVBAR_ITEMS } from '../util/constants';

interface IProps {
  className?: string;
}

const Navbar: FC<IProps> = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={classNames('bg-transparent flex items-center justify-between pl-8.5 pr-10.5', {
        [`${className}`]: className
      })}
    >
      <Link to="/">
        <img src={'/images/navbar/sacurn-logo.svg'} width={192} height={39} alt="sacurn" />
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
                <Link to={item.path}>
                  <p className="text-white">{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center 2xl:gap-9 gap-5 2xl:ml-17 ml-12">
          <Link to="/cart">
            <img
              src={'/images/navbar/cart.svg'}
              alt="sacurn"
              className="2xl:w-9 w-7 2xl:h-9 h-7 cursor-pointer"
              width={35}
              height={34}
            />
          </Link>
          <img
            onClick={() => navigate('/')}
            alt="sacurn"
            src={'/images/navbar/member.svg'}
            className="2xl:w-10.5 2xl:h-10.5 w-8 h-8 cursor-pointer"
            width={42}
            height={42}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
