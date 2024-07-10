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

    // !Ancestry References
    // git show HEAD~1 --> points to parent of head
    // git show HEAD~10 --> points to 10 commits above of head

    // git show HEAd^1 --> points to parent of head
    // git show HEAd^2 --> points to second parent of head (if it had one)

    // !commit ranges
    // if we want to see the commits in one branch that are not in other

        // !double dot
        // git log branchA..branchB --> commits of branchB that are not in BranchA

        // !multiple dots
        // git log branchA branchB ^branchC --> commits of branchC which is not present in branchA or branchB
        // if carrot is placed before the ref then  we can see the commit  ranges with multiple branches

        //! triple dot
        // git log branchA...branchB --> this will show all commits that are not in both the branches
        // this is better then double dots but not specific to branch order