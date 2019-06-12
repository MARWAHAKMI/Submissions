
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var splittingText = text.trim().split(" ");
  //console.log(text)
  if (text === 'quit\n' || text == 'exit\n') {
    quit();
  }
  else if(splittingText[0] === 'hello' || text == 'hello\n'){
    hello(splittingText);
  }
  else if(text === 'help\n')
  {
    help();
  }
  else if(text === 'list\n')
  {
    listTasks();
  }
  else if(splittingText[0] === 'add'  || text === 'add\n')
  {
    add(splittingText)
  }
  else if(text === 'remove\n' || splittingText[0] === 'remove')
  {
    remove(splittingText , text);
  }
  else if(text === 'edit\n' || splittingText[0] === 'edit')
  {
    edit(splittingText , text);
  }
  else{
    unknownCommand(text);
  }
}


/////
var list = [{command:'hello'}, {command:'quit Or exit'}];
var ArrayList = ['hello' , 'quit' , 'help' , 'remove'];

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 * Say hello  + whatever you wrote next to it. + "!"
 * 
 * @returns {void}
 */
function hello(splittingText){
  console.log(splittingText.join().replace('\n' , '').replace(',' , ' ') + "!");
}


/*
  list all commands that are exist in command line.
 */
function help()
{
  for(let i = 0 ; i < list.length ; i++)
  {
    console.log((i+1)+ "- " +list[i].command);
  }
  console.log(">list [list all commands]\n>remove [remove last command exist in list]\n>remove -number- [removes specific command]\n>add [add new command]")
}

/*
*
*/ 
function listTasks()
{
  for(let i = 0 ; i < ArrayList.length ; i++)
  {
    console.log((i+1)+ "- " +ArrayList[i]);
  }
}

//Add Function:
function add(splittingText)
{
  var addedTask ;
  if(splittingText[1])
  {
    ArrayList.push(splittingText[1]);
  } 
  else
  {
    console.log("Error!!!!");
  }
}

/*
* Remove Function
*/
function remove(splittingText , text)
{
  if(text === 'remove\n')
  {
    ArrayList.pop();
  }
  else if(splittingText[1] >= ArrayList.length)
  {
    console.log(" Error! the number of the command isn't exist!")
  }
  else
  {
    ArrayList.splice(splittingText[1]-1 , 1);
  }
}

/*
*Edit function
 */
function edit(splittingText , text)
{
  if(text === 'edit\n')
  {
    console.log("Error message!");
  }
  else if(isNaN(splittingText[1]*1))
  {
    splittingText.shift(); // remove edit from the text.
    ArrayList.splice(ArrayList.length-1 , 1 , splittingText.join())
  }
  else
  {
    var newText = splittingText[1]
    splittingText.shift();
    splittingText.shift();
    ArrayList.splice(newText-1 , 1 , splittingText.join().replace('\n' , ''));
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Marwa")
