// !Single Revisions
    // !Short SHA-1
    // ex: d5e596f30106c4d5f326a4d48f264cecfaa4a194
    // we can refer to a commit with at least 4chars from 40char
    // the commit hash of 12chars in mostly unique in the objects dir
    // git show [commit]

    // !Branch References
    // if you see any last commit of a branch we can use
    // git show [branchname]
    // git show [commit]
    // here both are same

    // !RefLog Shortnames
    // reflog stores all the info upto 2-3 months if any changes happend to HEAD
    // git reflog --> shows history
    // it is completly local cannot be sent to remote or integrate with it
    // git show HEAD@{index}

