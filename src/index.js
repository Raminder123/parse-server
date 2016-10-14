import ParseServer          from './ParseServer';
import S3Adapter            from 'parse-server-s3-adapter'
import FileSystemAdapter    from 'parse-server-fs-adapter'
import InMemoryCacheAdapter from './Adapters/Cache/InMemoryCacheAdapter'
import NullCacheAdapter     from './Adapters/Cache/NullCacheAdapter'
import RedisCacheAdapter    from './Adapters/Cache/RedisCacheAdapter'
import TestUtils            from './TestUtils';
import { useExternal }      from './deprecated';
import { getLogger }        from './logger';

var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'ybkCiuD5JjDLfceX91fT9bCijKLd7BGNbZ6LQCLr',
  masterKey: process.env.MASTER_KEY || 'DMMCeeylPSXCMkX1wXaWNlxhsguSpLMQhQq1nAiY'
});

var app = express();

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
// Mount the create liveQueryServer
_ParseServer.createLiveQueryServer = ParseServer.createLiveQueryServer;

let GCSAdapter = useExternal('GCSAdapter', 'parse-server-gcs-adapter');

Object.defineProperty(module.exports, 'logger', {
  get: getLogger
});

export default ParseServer;
export { S3Adapter, GCSAdapter, FileSystemAdapter, InMemoryCacheAdapter, NullCacheAdapter, RedisCacheAdapter, TestUtils, _ParseServer as ParseServer };
