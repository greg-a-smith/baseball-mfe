import "./Button.css";

const Button = (props) => {
  const {
    type = 'default',
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={`component-button component-button--${type}`}
    />
  );
};

export default Button;
