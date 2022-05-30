import format from 'format-number';

export const formatBalance = (balance: number) =>
    format({suffix: ' $', integerSeparator: ' '})(balance);
