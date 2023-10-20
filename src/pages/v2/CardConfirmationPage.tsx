import React, { Fragment } from 'react';

import SignatureConfirmationModal from './SignatureConfirmationModal';
import UpgradeConfirmationModal from './UpgradeConfirmationModal';
const CardConfirmationPage = () => {
  return (
    <Fragment>
      <UpgradeConfirmationModal />
      <SignatureConfirmationModal />
    </Fragment>
  );
};

export default CardConfirmationPage;
