import './Error.scss';

type Props = {
  message: string;
};

export const Error = ({ message }: Props) => (
  <p className="Error">
    { message }
  </p>
);
