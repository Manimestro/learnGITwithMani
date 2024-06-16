//getting started with version control systems (VCS)

    // Version control is a system that tracks changes to a file or a set of files over time

    // previously pople copying files into another directory and manage versions

    // Revision Control System is popular vc
    // RCS operates by storing patch sets, which are the differences between file versions, in a special format on disk. By accumulating these patches, RCS can reconstruct the state of any file as it existed at any given point in time.

    // Centralized Version Control Systems (CVCSs) for cloud store
    // take a file from cloud make changes and then send as revision
    // in this only one developer has access to only one revision

    // Distributed Version Control Systems (DVCSs) git etc
    // clients do not just check out the latest snapshot of files; they mirror the entire repository, complete with its full history
    // Developers can work independently, commit changes locally, and then synchronize and share their changes with others


//History

    // The Linux kernel, a significant open-source project, initially managed changes through patches and archived files from 1991 to 2002.
    // In 2002, the project adopted BitKeeper, a proprietary Distributed Version Control System (DVCS).
    // By 2005, disagreements between the Linux community and BitKeeper's commercial developers led to the revocation of BitKeeper's free status.
    // Git was born from this initiative, incorporating lessons learned from BitKeeper.

    // Now git developed by linux kernal community


//about git

    // git is a special and unique DVCS
    // git stores entire project as a snapshot. dont give a shit of files or file names, location of files
    // at every snapshot git has a full project
    // git stores refs of prev files if files not chamges on revision to optimise data storage
    // git uses sha-1 hash cryptography to generate a hexa decimal value for each time a file changes a new hash is generated
    // git only see the content and generate hash.. if a sample content is there in multiple files hash is always same and it wont duplicate it instead it will reference it for the current snapshot
    // files can be untracked, modified, staged, commited
    // git dont consider untracked or ignored files
    // git saves the data storngly if it is commited. git only stores the info ..wheter you delete, add , modify content git only adds to database wont do delete operations
    // modified ---> working dir
    // staged ----> staging area
    // commited ---> git dir
    // we need to send the modified files to stagging area .. to conform that they will be in new snapshot as a chnaged file
    // using commit id and hash conforms that content is only stored once.. irrespective of filename, or location
