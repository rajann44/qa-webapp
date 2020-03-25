## Release Notes

Chosen simple approach, which means:

* localStorage used for data persistence
* data manipulation efficiency inconsequential
* local user logging, no auth lib required (but prepared for use)
* error handling/logging inconsequential
* simple architectural design
  * no original list owner concept, list-assigned users have same priviledges
  * by design, deleting user from list leaves "ghost" items in place (could be changed easily)
* simple UX
  * no confirmation dialogs
  * no user instructions
* simple UI
  * just lists of items
  * some animated UI components not to be used in production, I was just playing :)
  * data-visualisation graphs not appropriate for larger data sets
* layout non-responsive
  * no tests included
  * however I did implement the bonus spec - user login

## UI Resources

You can find associated Figma resources here:<br />
https://www.figma.com/file/5JlwFAZQWjwxk5OHwI67aC/Incomes-Expenses-App?node-id=0%3A1

## How to Run

### `yarn`

Install all required dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
