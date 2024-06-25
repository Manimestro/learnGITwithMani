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
