Git:

::Create file
/myrepo> cat sagar.txt.  // create your own file
This is my first file line

/myrepo> cat >> sagar.txt.  // edit sagar.txt file

myrepo>ls    // to see application/physical files like sagar.txt
Sagar.txt

/myrepo> ls-la.   // files with details as a table view
/myrepo>ls -a.   //to see all the files including git


/myrepo>git branch     //to know which branch u r using
*Feature/country-service        //current branch selected 
Feature/main-branch

::To remove git reference from local repository:
/myrepo> rm -rf .git.               // .gif file will removed automatically

::To keep with local only make gitignore file with local file references
/myrepo>touch .gitignore       //will create gitignore file In which you can add untracked files names with extension.

::To clone particular repository:
git clone git@bitbucket.org:project/project.git -b develop_one --single-branch

::To get information about your git repository: use git remote -v

C02T140BGTFL:angular2andJavaBasic e071313$ git remote -v
origin	https://github.com/surysagar/angular2andJavaBasic.git (fetch)
origin	https://github.com/surysagar/angular2andJavaBasic.git (push)


::To check branch information: use git branch -a

C02T140BGTFL:angular2andJavaBasic e071313$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master

Before commit you can also check what are the changes you have made in files and what changes terms of code as well.
C02T140BGTFL:angular2andJavaBasic e071313$ git diff


If you haven't connected your local repository to a remote server, add the server to be able to push to it:
/proj>git remote add origin <server>



Esc + “ ; ”
W. Save
Q. Quit

