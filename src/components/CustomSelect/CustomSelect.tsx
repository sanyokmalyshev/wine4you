import { useState, useRef, useEffect, useCallback } from "react";
import useOutsideClick from "helpers/useOutSideClick";
import "./CustomSelect.scss";
import { UseFormRegister, UseFormSetValue, UseFormUnregister } from "react-hook-form";
import { Inputs } from "types/Inputs";
import classNames from "classnames";

type Props = {
  options: string[];
  register: UseFormRegister<Inputs>;
  selectName: string;
  unregister: UseFormUnregister<Inputs>;
  registerName: string;
  errors: boolean;
  setValue: UseFormSetValue<Inputs>;
  setError: any;
};

const CustomSelect = ({
  options,
  register,
  selectName,
  unregister,
  registerName,
  errors,
  setValue,
  setError
}: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const selectRef = useRef(null);
  const nameRegister = registerName as keyof Inputs;

  useOutsideClick(selectRef, () => {
    setOpen(false);
  });

  const unreigsterCallback = useCallback(() => {
    unregister(nameRegister)
  }, [unregister, nameRegister]);

  useEffect(() => {
    if (!selected) {
      setError(nameRegister, { type: 'empty', message: 'empty field' });
    }
    setValue(nameRegister, selected, { shouldTouch: true });
    
    return () => {
      unreigsterCallback();
    }
  }, [selected, unreigsterCallback, nameRegister, setValue, setError])

  return (
    <div>
      <div
        ref={selectRef}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="custom-select-wrapper"
      >
        <div 
          {...register(nameRegister, { required: true })}
          className={classNames(
            "custom-select",
            {"open": isOpen},
            {'custom-select__trigger--invalid': errors},
            {'custom-select__trigger--valid': !errors}
          )}
          
        >
          <div className="custom-select__trigger">
            <span>
              {options.find((item) => item === selected) ||
                selectName}
            </span>
            <div className="arrow"></div>
          </div>
          <div 
            className="custom-options"
          >
            {options.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setSelected(item);
                }}
                className="option-container"
              >
                <span
                  className={`custom-option ${
                    selected === item && "selected"
                  } `}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
