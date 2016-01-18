# nixie rc

This config file specifies options for the generated applications.  The config is a hash of platforms that

Platforms is a hash of keys that correspond to the supported platform that a `nixie` application can run on.  Can be one of: Cordova, Electron, Browser, Mobile, Common.  Common is privledged -- if keys are not provided in one of the other platforms, but is specified in common, then those targets will use what is specified in common rather than the regular defaults.

# Examples

Here's an example .nixierc.  Options are set either at the `.nixierc` root, which are set as defaults for all targets, or in a platform-specific hash, which is used for .

To support everything Linux

    {
      "common": {
        "sources": "common",
        "database": {
          "type": "lokijs",
          "in-memory": true
        },
        "cache": {
          "type": "node-cache",
          "in-memory": true
        },
      },
      "cordova": {
        "targets": [ "android" ]
      },
      "electron": {
        "targets": [ "linux" ]
      },
      "browser": {
        "sources": "browser",
        "targets": [ "static", "spa" ],
        "database": {
          "type": "mongodb",
          "in-memory": false
        },
        "cache": {
          "type": "redis",
          "in-memory": "false"
        }
      }
    }


# Options

## Sources (required)

Where the source code

## Cache

## Database

## Targets
