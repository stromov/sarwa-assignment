import * as React from 'react';

export const Heading = () => (
    <thead>
        <tr>
            {['id', 'balance', 'status'].map(item => (
                <th key={item}>{item}</th>
            ))}
        </tr>
    </thead>
);
