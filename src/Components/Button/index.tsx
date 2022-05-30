import * as React from 'react';

import './index.css';

type Props = {
    className: string;
    disabled?: boolean;
    onClick: () => void;
};

export const Button = ({
    onClick,
    className,
    children,
    disabled,
}: React.PropsWithChildren<Props>) => (
    <button type="button" className={`button ${className}`} onClick={onClick} disabled={disabled}>
        {children}
    </button>
);
