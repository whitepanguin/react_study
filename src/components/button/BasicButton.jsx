import React from 'react';
import Button from './style';

// variant, shape, size, border, color, font
const BasicButton = ({children, ...rest}) => {
    return (
        <Button 
            // variant={variant}
            // shape={shape}
            // size={size}
            // border={border}
            // color={color}
            // font={font}
            {...rest}
        >{children}</Button>
    );
};

export default BasicButton;