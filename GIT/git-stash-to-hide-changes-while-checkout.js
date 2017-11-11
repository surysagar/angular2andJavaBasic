//  want to switch branches but you don’t want to do a commit of half-done work 
//  just so you can get back to this point later. 
//  
git stash   // temporary remove the half done work(modified task) and happens uptodate branch..
git stash apply   // re create half done work in modified section.

git stash apply --force  // if git complains "Cannot apply to a dirty working tree, please stage your changes"

$ git stash list // list of stashed..