# There are two types of dependencies in any project 
- dev dependency => packages which are required for development phase 
- dependency => dependencies which we use in production

"parcel": "^2.16.4"
^ => will automatically installs the minor version (preferred)
~ => will automatically installs the major version

package.json
config for npm
it keeps track of what version package is installed in system

package-lock.json
it keeps track of exact version of a package

if we have package.json and package-lock.json we can regenerate the node_modules


NPM vs NPX 

npm is used to install any package
npx is used to execute a package

# Parcel
- Dev Build
- Local Server
- HMR hot module replacement
- file watching algorithm - written in c++
- caching - faster builds
- Image optimizations
- Minification and Compression
- Code Bundling