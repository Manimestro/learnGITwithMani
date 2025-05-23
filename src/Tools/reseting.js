//! Reseting the commits

//! checkout
// git checkout [ref] --> this will move the HEAD to a specific commit or branch(lateset comit)
// this doesnt change the branch refernce at any cost

//! steps while commiting
// working dir --> stagging dir --> git directory --> working dir

// when we do a commit these things will happen
// first modify files in working dir (HEAD of current branch)
// then add them to stagging area
// while git commit will look at stagging area
// it see difference between stagging area and HEAD(last commit)
// and branch ref  is moved to lateset commit
// and working dir will have the snapshot of HEAD

//!  reseting
// this is opposite to commiting
// git reset HEAD~1 --> this moves the branch reference by 1 commit back
// move head --> update index --> update working dir
// git reset --soft HEAd~1 --> this moves HEAD and branch (kind of removing commit on branch)
// and leave the work on index
// git reset --mixed HEAD~1 --> this will check the HEAD and stagged files and update Index with HEAD changes
// git reset --hard HEAD~1 --> this will update working dir with index files (modified files are also overwriten)

// //! recap
// Move the branch HEAD points to (stop here if --soft).
// Make the index look like HEAD (stop here unless --hard).
// Make the working directory look like the index.

//! Reset With a Path

// we can reset a path not a whole commit
// git reset HEAD path --> this is same like reset but skips first step
// it will change the stagging area to look like that commit only for that path


//! differnce bwt Checkout and reset

// reset moves the branch ref but checkout moves the HEAD

// no path
// git checkout master --> this moves HEAD --> master
// checkout will do a check for modified files and keep that files and updates the unmodified files
// git reset --hard master --> this will update the current branch ref (risky)

// with path (nothing will update HEAD because of path)
// git checkout master [path] --> this will update the file same as master's file (riscky)
// git reset  master [path] --> this will update the stagging area with file same as master's file

//fir tho risk dhono sides be hai kaleen bhaiyaa
