// create new branch "myFeature" from "dev" branch
// 
$ git checkout dev
$ git checkout -b myFeature dev   // new branch has been created..
// 
// do some work on myfeature branch ****
$ git commit -am "Your message"    // commit feature branch
// 
//Now merge your changes to dev without a fast-forward

$ git checkout dev
$ git merge --no-ff myFeature      // merging myFeature branch into dev branch
// 
// Now push changes to the server

$ git push origin dev
// Git is basically doing this: $ git fetch origin other-branch && git merge other-branch to dev branch




// create new branch this way as well..but need two commands...
// 
branch1>git branch mynewbranch   // created new branch from branch1 and you have to go
branch1>git checkout mynewbranch  // 