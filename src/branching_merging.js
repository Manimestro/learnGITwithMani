// git branching

// usage: you want want to work different versions of versions

// commit history is for a branch.. and we can have mutiple branches

// branch is a pointer to a commit

// when we commit using git commit .. it creates a couple of blob files ..files that are changed and a tree file for mainting hirarcy and file names and a file of commit

// git branch [name] --> creates a new pinter up to latest commit that is new branch
// git checkout [name] --> switches to that branch (changes working dir that latest commit) and sync with branch commit history

// if we again commit new one that points to old commit of this branch

// if we checkout back to before branch git will take you to old commit which is latest to that branch

// if we go commit then the branches will diverge both secong new commit and first new commit points to old commit which splits a line into branch

// branching is cheaper (writing a 40char checksum to new file) which is pointing commit

// git checkout -b [name] --> creates and switches at same time

// git maintain a refernce called HEAD which points to active working branch so that git updates the branch ref to new commit


// git merging

// when we finish working on a branch and you want to add that changes(commits) on another branch

// git checkout [main branch]

// git merge [feature branch] --> git merges the feat branch to main branch

