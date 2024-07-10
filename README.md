
Executing:

use GET '/todo' to get all the tasks.

use POST '/todo' to create a task by parsing a JSON with the title and status of the task. note: status is an enum of "not started", "pending" and "done", anything else will result in an error in the API.

use PUT '/todo/:id' to update that task.

use DELETE '/todo/:id' to delete that task.

Proper error handling is impleted into the API.
