Package.describe({
  name: 'maxfi:remote-collection',
  version: '0.0.1',
  summary: 'Use additional MongoDB databases in your Meteor app.',
  git: 'https://github.com/maxfi/meteor-remote-collection.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('coffeescript');
  api.export('RemoteCollection');
  api.addFiles('remote-collection.coffee');
});
