/* example */
import * as React from 'react';
import classNames from 'classnames/bind';

import {noop} from '@utils'; //wrappers on lodash
import {KeyboardKeys} from '@constants'; //wrappers on lodash

import {getStyle} from './button-utils';

import styles from './button.module.scss';
import {ButtonProps} from './button-types';

interface ButtonState {
    isFocused: boolean;
    isTabbed: boolean;
}

const cn = classNames.bind(styles);

// example button
export class Button extends React.Component<ButtonProps, ButtonState> {
    buttonRef = React.createRef<HTMLButtonElement>();

    static defaultProps = {
        label: '',
        disabled: false,
        danger: false,
        primary: false,
        iconPositionRight: false,
        isSmall: false,
        isSmallText: false,
        type: 'button' as React.ComponentProps<'button'>['type'],
    };

    state = {
        isFocused: false,
        isTabbed: false,
    };

    componentDidMount() {
        this.handleRef();
    }

    componentDidUpdate() {
        this.handleRef();
    }

    handleRef = () => {
        //logic
    };

    handleKeyUp = ({key}: React.KeyboardEvent<HTMLButtonElement>) => {
        if (key === KeyboardKeys.TAB) {

            this.setState({isTabbed: true});
        }
    };

    handleFocus = () => this.setState({isFocused: true});

    handleBlur = () => this.setState({isFocused: false, isTabbed: false});

    render() {
        const {
            label,
            onClick,
            disabled,
            primary,
            danger,
            icon,
            width,
            isSmall,
            isSmallText,
            type,
            upperCase,
            withoutHover,
        } = this.props;

        const {isFocused, isTabbed} = this.state;
        const style = getStyle({width});

        return (
            <button
                ref={this.buttonRef}
                type={type}
                onKeyUp={this.handleKeyUp}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                className={cn('button', {
                    'button--focused': isFocused && isTabbed,
                    'button--primary': primary,
                    'button--contained-red': primary && danger,
                    'button--danger': danger,
                    'button--small': isSmall,
                    'button--small-text': isSmallText,
                    'button--without-hover': withoutHover,
                })}
                disabled={disabled}
                onClick={onClick}
                style={style}
            >
                {icon && <span className={cn('button__icon')}>{icon}</span>}
                {upperCase && label ? label.toUpperCase() : label}
            </button>
        );
    }
}
