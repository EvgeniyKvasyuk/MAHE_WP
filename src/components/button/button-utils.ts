interface GetStyleProps {
    width?: string | number;
}

export const getStyle = ({width}: GetStyleProps) => {
    const style: {width?: string | number} = {};

    if (width) {
        style.width = width;
    }

    return style;
};
