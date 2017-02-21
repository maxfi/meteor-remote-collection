# meteor-remote-collection
Use additional MongoDB databases in your Meteor app.

## Installation

```sh
$ meteor add maxfi:remote-collection
```

## Usage

On client or server:

```JavaScript
// using a MongoDB URI
MyCollection = new RemoteCollection('mongodb://username:password@localhost:27017/database');

// or using an environment variable
MyCollection = new RemoteCollection('SOME_ENV_VAR'); // Where `process.env.SOME_ENV_VAR`

// optionally pass in connection options
var connectionOptions = {oplogUrl: 'mongodb://username:password@localhost:27017/local?authSource=admin'};
MyCollection = new RemoteCollection('SOME_ENV_VAR', connectionOptions);

// or optionally pass in OPLOG URI
MyCollection = new RemoteCollection('SOME_ENV_VAR', 'SOME_OTHER_ENV_VAR'); // Where `process.env.SOME_OTHER_ENV_VAR`
```

## To Do

* Potentially reuse `MongoInternals.RemoteCollectionDriver` across multiple `RemoteCollection` instances.
