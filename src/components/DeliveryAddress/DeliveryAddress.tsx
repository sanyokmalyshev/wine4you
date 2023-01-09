import { useEffect, useCallback } from 'react';
import { UseFormRegister, UseFormUnregister } from 'react-hook-form';
import { Inputs } from 'types/Inputs';
import './DeliveryAddress.scss';
import { TextField } from 'components/TextField.scss/TextField';

type Props = {
  register: UseFormRegister<Inputs>;
  errors: any;
  touchedFields: any;
  unregister: UseFormUnregister<Inputs>;
};

export const DeliveryAddress = ({ register, errors, unregister, touchedFields }: Props) => {
  const touched = touchedFields.address?.courierAddress;
  const error = errors.address?.courierAddress;

  const unreigsterCallback = useCallback(() => {
    unregister('address.courierAddress.street');
    unregister('address.courierAddress.city');
    unregister('address.courierAddress.house');
  }, [unregister]);

  useEffect(() => {
    return () => {
      unreigsterCallback();
    };
  }, [unreigsterCallback]);

  return (
    <div className='DeliveryAddress'>
      <h3 className='DeliveryAddress__shipping'>
        Delivery adress*
      </h3>
      <div className='DeliveryAddress__address'>
        <TextField
          type='text'
          touchedFields={touched?.city}
          errors={error?.city}
          name='city'
          register={register('address.courierAddress.city', { required: 'This is required' })}
          placeholder='Enter a City'
        />
        <div className='DeliveryAddress__street'>
          <TextField
            type='text'
            touchedFields={touched?.street}
            errors={error?.street}
            name='street'
            register={register('address.courierAddress.street', { required: 'This is required' })}
            placeholder='Enter a Street'
          />
          <TextField
            type='text'
            touchedFields={touched?.house}
            errors={error?.house}
            name='house'
            register={register('address.courierAddress.house', { required: 'This is required' })}
            placeholder='Enter a House'
          />
        </div>
      </div>
    </div>
  );
};
