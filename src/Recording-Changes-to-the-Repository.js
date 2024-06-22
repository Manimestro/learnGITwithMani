//! making first commit

// git status ---> to see the status of all files and entire repo
// status can be untracked,unmodified,modified, stagged, commited

// git add [path] ---> to take files to stagging area
// git restore --stagged [path] ---> to bring back to working dir from stagging area

// git diff --> compares modified files with staged files (if not then last commit)
// git diff --stagged --> compares staged files with last commit


// git commit -m [commit message] ---> to make a new snapshot with the files in stagging area
// git commit -a -m [commit message] ---> stage and commit all modified files

//! delete files from working dir and git dir

// rm [file] ---> remove locally
// git add [file] --> stage
// git commit -m [msg] --> commit the deletion version

// or

// rm [file] + git add [file] --> git rm [file] --> removes and stage the file
// git commit -m [msg] --> commit the deletion version

// options :
    // -f --> del even it is modified or staged
    // --cached --> untrake the file from git dir but not from working dir


// move files that are tracked
// mv [old] [new] -->  file name changes
// git add [old]
// git add [new]
// git commit -m 'changed name'

// or

// git rm [old] [new] --> rename and stage
// git commit -m 'changed name'


