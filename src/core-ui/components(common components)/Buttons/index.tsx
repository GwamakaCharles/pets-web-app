/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React from "react";

/*
1. We use the `classes` prop to access the `btn` class.
2. We use the `children` prop to display the text.
3. We use the `onClick` prop to handle the click event.
4. We use the `style` prop to style the button. */
const Buttons: React.FC<{ classes: { btn: string }, children: any, onClick?: any, style?:any }> = ({
  classes, children, onClick, style,
}) => {
  return (
    <button style={style} className={`${classes.btn} rounded-full font-medium text-sm`} onClick={onClick}>{children}</button>
  );
};

export default Buttons;
