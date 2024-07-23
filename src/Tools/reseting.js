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
// if there is any difference the a new commit will created
// and HEAD is moved to lateset (which is checkouts to lateset commit)
// branch reference moves to lateset commit
// and working dir will have the snapshot of HEAD

