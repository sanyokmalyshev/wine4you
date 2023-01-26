import './InputError.scss';

type Props = {
  message: string,
};

export const InputError = ({ message }: Props) => {
  return (
    <p className="InputError">
      <i className="icon InputError__invalidIcon"></i>
      { message }
    </p>
  );
};
