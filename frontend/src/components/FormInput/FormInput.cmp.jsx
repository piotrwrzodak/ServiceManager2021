import classnames from 'classnames';
import styles from './FormInput.module.scss';

const FormInput = (props) => {
  const {
    inputType,
    inputPattern,
    min,
    valueKey,
    text,
    stateValue,
    error,
    resetThenSet,
  } = props;

  return (
    <input
      className={classnames(styles.input, {
        [styles.empty]: !stateValue && !error,
        [styles.error]: error,
      })}
      type={inputType}
      pattern={inputPattern}
      min={min}
      value={stateValue ?? ''}
      onChange={(event) => resetThenSet(valueKey, event.target.value)}
      placeholder={text}
    />
  );
};

export default FormInput;