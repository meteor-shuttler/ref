Package.describe({
  name: 'shuttle:ref',
  version: '0.0.1',
  summary: 'Adds `Ref` helper to all documents in all collections.',
  git: 'https://github.com/meteor-shuttle/ref',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('mongo');
  api.use('ecmascript');
  
  api.use('aldeed:simple-schema@1.5.1');
  api.use('dburles:mongo-collection-instances@0.3.4');
  api.use('dburles:collection-helpers@1.0.4');
  api.use('lai:collection-extensions@0.2.1');
  api.use('shuttle:namespace@0.0.0');
  
  api.addFiles('helper.js');
  api.addFiles('isRef.js');
  api.addFiles('Ref.js');
  api.addFiles('Schema.js');
  
  api.export('Shuttle');
});