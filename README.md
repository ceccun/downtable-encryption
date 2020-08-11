# Stella Downtable Encryption
Downtable Encryption is a simple match-based encryption system written in Javascript.
### Supported Languages
- Javascript
## Install
Add Downtable Encryption to your HTML files in a script tag either two ways.
### Self Hosted Downtable

    <script src="downtable.js" type="text/javascript"></script>
Optional Parameters to this element:

  **`src`** - Set this to where Downtable is stored.
### Downtable Hosted by Stella (Recommended)
This option is recommended as it will be always updated to support more characters and features.

    <script src="https://stella.hs.vc/downtable-encryption/downtable.js" type="text/javascript"></script>

## Usage Inline
In a script, either call `encrypt(data, key);` to encrypt data using the key provided.

**`data`** - Data to encrypt. It has to be a string.
**`key`** - Key to encrypt with. It has to be string.
### Example

    > encrypt("Hello World!", "Secret Code");
    Output: "S3:e1:S1:S1:r1:e7:e13:r1: 1:S1:r0:S5:"
Separation only happens with the `:` character and cannot be anything else. Furthermore, an encryption key cannot contain a `:`. You can process the data afterwards to allow it to include `:`, or update the scripts to allow usage of `:`. You can use `:` in data.

To decrypt the data use `decode(data, key);` to do just that.

**`data`** - Encrypted version of data. Has to be submitted as a string.
**`key`** - The key used to decrypt the data. Has to be the same key that was used to encrypt it.
