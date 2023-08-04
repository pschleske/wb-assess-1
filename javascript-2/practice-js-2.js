/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "code version control software"

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "It is a developer tool for cloud storage and version management"

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property
    will be a string with a description of what that git command does.  The 'code' property should be a
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    description: "Initializes an empty Git repository",
    code: "git init"
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: "This command clones a repository from the cloud to your computer",
    code: "git clone <url>"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description: "provides a summary of changes made",
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description: "is used to add files that aren't being tracked, it stages the files",
    code: "git add ."
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: "allows us to keep record of specific changes we made, includes a descriptive message",
    code: "git commit -m"
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
const addRemote = {
    description: "Let's you sync a remote repo to your own",
    code: "git remote add my_awesome_new_remote_repo git@git.assembla.com:portfolio/space.space_name.git"
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: "allows us to save changes in our code to github",
    code: "git push"
}
