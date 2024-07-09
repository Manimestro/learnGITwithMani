//! distributed git

//! Centralized Workflow paridigm :

// mainter gives you push access
// you can craete a branch and work on it and push
// first merge remote repo with current repo before pushing
// git wont allow for pushing if there is a divergent branches


//! Integration-Manager Workflow paridigm:

// you have write access to your own public repo and read access to others repos
// you clone a copy of others repo into your own public repo
// you make changes and commmits to your repo
// and make a pull-request to others repo
// maintainer will review and test and merge to their branch


//! Dictator and Lieutenants Workflow paridigm:

// It’s generally used by huge projects with hundreds of collaborators
// Clone the Repository from master repo
// create a branch and work on a topic
// make a pull request to lieutenant repo
// lieutenant reviews and merges in thier master branch
// lieutenat makes Pull request to master repo
// dictator reviews and merges with the master branch of master repo


//! Contributing to a Project

//! Commit Guidelines

// make a clear commit message (no more than about 50 char)
// https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
// short message + blank line + long message(74<col) with bullet points
// no whitespaces (git diff --check )
// always make commits for a topic

// git merging happens on client rather then server
// while pushing (1edee6b..fbff5bc  master -> master) --> ((oldref..newref of server)  fromref → toref (branches))
// git log --no-merges [branch1]..[branch2] --> difference in commits in two branches

// Types of organisations

// Private Small Teams :
// generally commit, fetch, merge , push and repeat by all developers

// Private Managed Team:
// here a group of teams work parllely and a intergation manager approves and merge to main branch

// Forked public Project:
// fork the repo , get remote url , fetch to local and madke commits push to local feat branch and make a pull request to original repo
// get the remote url from the orignal repo now
// git remote add origin2 [original remote url]
// git request-pull [our remote]/[branch name] origin2 --> this raises a PR to origin2 default branch

// git merge --squash [branch] --> this will merge the branch without commiting (leaves on stagged area)

// while a new branch came from remote
// you fetch, and create and  checkout to that branch
// to find diff between the new branch and existing (either commit or file changes)
// git log [branch name] --> log for a branch (lets say existing branch )
// git log [branch name] --not [second branch name] --> shows commits not present in second branch ()
// git diff [branchname] --> shows diff between branches
// git merge-base [branch1] [branch2] --> this will get a common ansistor commit
// git diff [commit hash] [branch2] --> you can see differnce between the two refs
// or even simplier is
// git diff [branch]...[topic_branch] -> this will do same takes common ansistor commit and show diff with current branch
