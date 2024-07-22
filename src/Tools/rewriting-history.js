//! rewriting history

// !Changing the Last Commit
// git commit --amend --> for rewriting latest commits

// !Changing Multiple Commit Messages
// even furthur you want we can use git rebase -i
// git rebase -i commit^ --> open an editor to change the commits
// select what to do with commit
// then exit editor and do what to want on commit
// then rebase --continue --> to continue

//! Reordering Commits
// change the script shown in editor
// pick f7f3f6d Change my name a bit
// pick 310154e Update README formatting and add blame
// pick a5f4a0d Add cat-file
// the 3 commits above in the script are source.. if you delete a line here the commit wont shown in history

//! Squashing Commits
// mutiple commits can be squashed into single commit
// pick f7f3f6d Change my name a bit
// squash 310154e Update README formatting and add blame
// squash a5f4a0d Add cat-file
// here the squash means it squashed with prev commit so all three are get squashed

// !Deleting a commit
// use drop --> to remove that commit

//! Splitting a Commit
// slipt the commit while editing it
// git rebase -i HEAD~3 --> start rebase
// edit script for a commit add EDIT and save file
// while on that commit reset it and split the commit

//! The Nuclear Option: filter-branch

// git filter-branch --tree-filter 'rm -rf file.py' HEAD
// this shell command excutes on the context of working dir of each commit
// --> --tree-filter will rebase commmits till we need and excute the shell command that we pass
// and re-commits them
// this is pretty usefull if you add a file or delete a file in all the commits

//  git filter-branch --commit-filter 'shell script' HEAD
// --> this do same as tree filter but it excutes commands on commit context where we can get the commit meta data
// and also can change it
