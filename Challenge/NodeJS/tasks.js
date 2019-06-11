
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
  else{
    unknownCommand(text);
  }
}


/////
var list = [{command:'hello'}, {command:'quit'}];

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
}

/*
*
*
*/ 
function listTasks()
{
  for(let i = 0 ; i < list.length ; i++)
  {
    console.log((i+1)+ "- " +list[i].command);
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
