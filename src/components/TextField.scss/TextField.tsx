import classNames from 'classnames';

type Props = {
  touchedFields: any;
  errors: any;
  register: object;
  type: string;
  placeholder: string;
};

export const TextField = ({
  touchedFields, errors, register, type, placeholder
}: Props) => {
  return (
    <input
      type={type}
      className={classNames(
        'textField__input',
        { 'textField__input--invalid': touchedFields && errors },
        { 'textField__input--valid': touchedFields && !errors }
      )}
      placeholder={placeholder}
      {...register}
    />
  );
};
