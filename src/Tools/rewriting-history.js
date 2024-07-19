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

