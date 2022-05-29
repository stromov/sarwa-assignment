import * as React from 'react';

type Props = {accountsCount: number; totalBalance: number};

export function Statistics({accountsCount, totalBalance}: Props) {
    return (
        <div>
            accounts count:
            {accountsCount}
            <br />
            total balance:
            {totalBalance}
        </div>
    );
}
