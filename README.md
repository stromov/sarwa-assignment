# Sarwa assignment

## Task description

This assignment is about creating a simple dashboard that staff can use to manage client accounts.

### Background:

-   Client accounts are simplified here to have the following fields
-   Status
-   Balance

### Account statuses have the following values and meanings:

-   Pending: An account that has been created but not yet approved by our team. Basically the client finished the “setup” but now we need to review their info before they can trade/fund. All accounts start off in this state. Can become approved or closed.
-   Approved: An account that has been approved by our team. Can become funded or closed.
-   Funded: An approved account that has been funded. Can become closed but only if the balance is 0.
-   Closed: Final state of an account. Basically it’s no-longer usable. Backend

### Build a frontend interface where a staff member can view all accounts in a table

-   Staff can filter by account status
-   Staff can see statistics and aggregate values of total balance and total # of accounts in each status
    at the top of the table
-   Staff can change the status for any account, but only to a status that is available given the current
    status of the account.

## How to run

```bash
    git clone git@github.com:stromov/sarwa-assignment.git
    cd sarwa-assignment
    npm install
    npm run start
```
