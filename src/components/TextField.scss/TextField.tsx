import classNames from 'classnames';
import { InputError } from 'components/InputError/InputError';
import './TextField.scss';

type Props = {
  touchedFields: any;
  errors: any;
  register: object;
  type: string;
  name: string;
  placeholder: string;
};

export const TextField = ({
  touchedFields, errors, register, type, name, placeholder
}: Props) => {
  return (
    <div className='TextField'>
      <input
        type={type}
        className={classNames(
          'TextField__input',
          { 'TextField__input--invalid': touchedFields && errors },
          { 'TextField__input--valid': touchedFields && !errors }
        )}
        placeholder={placeholder}
        {...register}
      />
      {name !== 'email' && touchedFields && errors
        && <InputError message='This field is required' />
      }
      {name === 'email' && touchedFields && errors
        && <InputError message={errors.type === 'pattern' ? 'Enter a valid email' : 'This field is required'} />
      }
    </div>
  );
};
