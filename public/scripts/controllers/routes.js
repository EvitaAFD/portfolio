'use strict';


page('/', projectController.loadAll, projectController.index);
page('/about', aboutController.init);

//Call function
page();
