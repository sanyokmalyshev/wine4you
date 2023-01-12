import { useEffect, useCallback } from 'react';
import { UseFormRegister, UseFormUnregister } from 'react-hook-form';
import { Inputs } from 'types/Inputs';
import './DeliveryAddress.scss';
import { TextField } from 'components/TextField.scss/TextField';
import { InputError } from 'components/InputError/InputError';

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
        <div className="textField">
          <TextField
            type='text'
            touchedFields={touched?.city}
            errors={error?.city}
            register={register('address.courierAddress.city', {
              required: true,
              pattern: {
                value: /^[a-zа-яё\s]+$/iu,
                message: ''
              }
            })}
            placeholder='Enter a City'
          />
          {touched?.city && error?.city?.type === 'required'
            && <InputError message='This field is required' />
          }
          {touched?.city && error?.city?.type === 'pattern'
            && <InputError message='
            Please enter only letters' />
          }
        </div>
        <div className='DeliveryAddress__street'>
          <div className="textField">
            <TextField
              type='text'
              touchedFields={touched?.street}
              errors={error?.street}
              register={register('address.courierAddress.street', { required: 'This is required' })}
              placeholder='Enter a Street'
            />
            {touched?.street && error?.street?.type === 'required'
              && <InputError message='This field is required' />
            }
          </div>
          <div className="textField">
            <TextField
              type='text'
              touchedFields={touched?.house}
              errors={error?.house}
              register={register('address.courierAddress.house', { required: 'This is required' })}
              placeholder='Enter a House'
            />
            {touched?.house && error?.house?.type === 'required'
              && <InputError message='This field is required' />
            }
          </div>
        </div>
      </div>
    </div>
  );
};
