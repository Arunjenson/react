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
- Parcel features at a glance:
- Hot Module Replacement (HMR)
- File Watcher Algorithm - C++
- Bundling
- Minify Code
- Cleaning our code
- Dev and production build
- Igniting Our App! ( Namaste-React ) 8
- Super fast build algorithm
- Image Optimization
- Caching while development
- Compression
- Compatible with older browser versions
- Https on dev
- Image Optimization
- Port No
- Consistency Hashing Algorithm
- Zero Config
- Tree Shaking