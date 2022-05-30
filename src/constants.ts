export const Status = {
    pending: 'Pending',
    approved: 'Approved',
    funded: 'Funded',
    closed: 'Closed',
} as const;

export const FilterStatus = {
    ...Status,
    all: 'All statuses',
} as const;
