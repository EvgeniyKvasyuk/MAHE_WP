import * as React from "react";

interface ButtonProps {
    label?: string;
    onClick?: (event?: React.SyntheticEvent) => void;
    disabled?: boolean;
    primary?: boolean;
    danger?: boolean;
    icon?: JSX.Element;
    width?: string | number;
    isSmall?: boolean;
    isSmallText?: boolean;
    upperCase?: boolean;
    type?: React.ComponentProps<'button'>['type'];
    withoutHover?: boolean;
}

export { ButtonProps }
