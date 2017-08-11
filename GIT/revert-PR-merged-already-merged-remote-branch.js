https://stackoverflow.com/questions/7099833/how-to-revert-a-merge-commit-thats-already-pushed-to-remote-branch


1. goto dev branch/ the branch from you want to revert the merged commit;
2. git revert -m 1 c771d6a2486sdsd33434b9cd8c5dd073f3a0523  // only that commot changes will revert
3. In local repository you have reverted older merged commit, now
	you are already on dev branch and you can directly push to dev branch(on remote), by >git push origin dev.
	or you can create new branch safe side like:
	>git checkout -b reverted-branch dev  //created new branch named "reverted-branch"
	and >git push origin reverted-branch // new branch will appear on bitbucket*



//git log gets below info:::
commit 8f937c683929b08379097828c8a04350b9b8e183
Merge: 8989ee0 7c6b236   // import to check with git log 8989ee0 and git log 7c6b236 .. see stackoverflow post above.
Author: Ben James <ben@example.com>
Date:   Wed Aug 17 22:49:41 2011 +0100



In this situation, 
****git revert 8f937c6 -m 1 will get you the tree as it was in 8989ee0, // all above merge commits will removed from that pertivular commit.
and 
****git revert -m 2 will reinstate the tree as it was in 7c6b236.   // only that perticular merge commit will removed


But you can also do it with:

git revert -m 1 c771d6a2486sdsd33434b9cd8c5dd073f3a0523   // only that perticular merge commit will removed