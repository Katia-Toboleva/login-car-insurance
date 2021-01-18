import React from 'react';
import { Text } from '@components';
import styles from './policy.scss';

const Policy = ({ policyDetails }) => {
  const { policyRef, cover, car, address } = policyDetails;
  return (
    <div className={styles['policy__wrapper']}>
      <div className={styles['policy']}>
        <div className={styles['policy__title']}>
          <Text
            text="my policy"
            transform="capitalize"
            size="large"
            weight="bold"
          />
        </div>
        <div className={styles['policy__body']}>
          <Text text="Policy reference:" weight="bold" />
          <Text text={policyRef} />

          <Text text="Cover type:" weight="bold" />
          <Text text={cover} />

          <Text text="Car:" weight="bold" />
          <Text text={car} transform="capitalize" />

          <Text text="Address:" weight="bold" />
          <Text text={address} />
        </div>
      </div>
    </div>
  );
};

export default Policy;
