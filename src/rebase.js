//! Rebasing a branch

// There are two ways to merge two branches
// one is merge and another is rebasing

// Merge will take common ansister and merge the commits on the lines they are changed and merge commit has two parents (which are two tail commits)

// Rebasing  will go to common ansister
// Then stores the changes from each commmit in a temp file
// resetes the branch upto ansister and fastforward the branch with commits in other
//  applyies each change on top with it commit message is same and commit id is not


// git rebase  [master] [feature]--> this will rebase the feature branch with master

// this will make a linear commit history

// Do not rebase commits that exist outside your repository and that people may have based work on.

// common usage: the branch you are working on a feature and may be the branch is updated on remote
// if you pull those changes then a divergent branch will come and three way merge will happen
// we can avoid it using rebasing.. always rebase your local branch onto remote branch

// git rebase --onto master server client --> this rebase client on top of master (doesnt include changes of server)

