//! commit history (revisions)

// git log --> logs all commit history
// git log --pretty=oneline -->
// git log -[number of commits]

// there are so many ways we can sort, filter, and even we can format and see the output

//! Undoing Things

// git commit --amend ---> takes stashing area files and adds to prev commit
// usage: when you forget something to include on commit you use use this to amend changes
// git commit --amend --no-edit --date "17/08/22 20:19:19 +0200" --> to change the time of commit

//! unstaging

// git reset HEAD [path] ---> unstage

// using restore
// git restore --stagging [path] --> stage to unstage
// git restore [path] --> reset changes to last stage state || last  commit state

