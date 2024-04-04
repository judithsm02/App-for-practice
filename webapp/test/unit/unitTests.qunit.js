/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"practice_app/practicej/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
