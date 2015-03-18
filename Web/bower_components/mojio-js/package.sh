# run make.sh
# make sure all tests pass.
#

#### npm
#
# update the version in the package.json file.
# authorize via npm adduser
# then publish with the command:
#
#       npm adduser
#       npm publish
#
#
#### bower
#
# update the bower.json file with the version.
#
# tag the repo with the correct version and push the tags to origin.
#
#       git tag -a v0.1.6 -m "Release v0.1.6"
#       git push origin master --tags
#
# now register the bower package:
#
#       bower register mojio-js https://github.com/mojio/mojio-js.git
#
#### CDN
#
#   update package.json
#   update index.html
#   create a directory under dist/cdn/[version] and copy the most recent version there.
#   commit and copy those same files to the cdn along with the new directory,

