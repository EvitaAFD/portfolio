'use strict';

// page('/', projectController.init);
page('/about', aboutController.init);
page('/', projectController.loadAll, projectController.index);

//Call function
page();
