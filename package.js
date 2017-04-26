Package.describe({
  name: 'shuttler:ref',
  version: '0.0.7',
  summary: 'Adds `Ref` helper to all documents in all collections.',
  git: 'https://github.com/meteor-shuttler/ref',
  documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.4.1');
  
  api.use('mongo');
  api.use('ecmascript');
  
  // api.use('aldeed:simple-schema@1.5.1');
  api.use('dburles:collection-helpers@1.0.4');
  api.use('lai:collection-extensions@0.2.1');
  api.use('shuttler:namespace@0.0.0');
  api.use('shuttler:collection@0.0.4');
  
  api.addFiles('helper.js');
  api.addFiles('isRef.js');
  api.addFiles('Ref.js');
  api.addFiles('Schema.js');
  
  api.export('Shuttler');
});

Package.onTest(function(api) {

  api.use('mongo');
  api.use('ecmascript');
  api.use('shuttler:ref');

  api.use('tinytest');
  api.addFiles('isRef.test.js');
})

Npm.depends({
	'simpl-schema': '0.1.1'
});