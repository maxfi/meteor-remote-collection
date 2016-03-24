RemoteCollection = function(name, connectionString) {
  if (Meteor.isClient) {
    return new Mongo.Collection(name);
  }
  if (Meteor.isServer) {
    if (connectionString.substr !== 'mongodb://') {
      // Assume environment variable
      connectionString = process.env[connectionString];
      if (!connectionString) throw new Error('Please either pass a MongoDB URI or name of an existing environment variable');
    }
    return new Mongo.Collection(name, {
      _driver: new MongoInternals.RemoteCollectionDriver(connectionString)
    });
  }
};