//! tagging a commit ref

// usage: if you want to mark up to a commit as a version then .. tags are usefull

// git tag [tagname]  --> creates a tag
// git tag -a [tagname] [commitid]  -m --> creates a tag annotation tag (with message)
// git tag -d [tagname] --> delete tag
// git push origin [tagname] --> push tags to server
// git push origin --delete [tagname] --> delete tag on server
// git checkout -b [new branch] [tagname] --> creates new branch of that tag version and switch to it



//! git alias

// usage : If you don’t want to type the entire text of each of the Git commands we can alias

// git config --global alias.logger git log --oneline --> alias command to logger, we can use git logger
