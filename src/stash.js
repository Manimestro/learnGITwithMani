//stashing

//Usage:
// When you're in the middle of working on your project and
// need to switch branches or work on something else without committing your changes

// git stash ---> stash the changes (all uncommited files)
// git stash list ---> list items in stack stash@{index}
// git stash apply ---> apply the stashed changes
// git stash drop ----> drop the stashed changes
// git stash apply + git stash drop ----> git stash pop ---> apply and drop
// git stash clear ----> clears stash stack
// git stash apply --index ---> restage if the file is staged
// git stash --keep-index ----> only stash unstaged files
// git stash --include-untracked ----> also stash untracked files
// git stash --all ----> stashes even ignored files
// git stash branch [name] ---> creates new branch out of the stash
// git stash --patch (adv) --> interactive stashing

// Saved working directory and index state WIP on main: 4776dbb added stashing
// stash@{0}: WIP on main: 4776dbb added stashing
