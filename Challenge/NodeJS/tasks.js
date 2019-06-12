
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
    //listTasks();
    listObjects();
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
  else if(text === 'check list\n')
  {
    listObjects();
  }
  else if(text === 'check\n' || splittingText[0] === 'check')
  {
    check(splittingText , text);
  }
  else if(text === 'uncheck\n' || splittingText[0] === 'uncheck')
  {
    uncheck(splittingText , text);
  }
  else{
    unknownCommand(text);
  }
}


/////
var list = [{command:'hello' , done: true}, {command:'quit Or exit' , done: false}];
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
  console.log(">check [mark the command]\n>uncheck [uncheck the command]")
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
function listObjects()
{
  for(let i = 0 ; i < list.length ; i++)
  {
    if(list[i].done)
    {
      console.log((i+1) +". [✓] "+list[i].command )
    }
    else
    {
      console.log((i+1) +". [ ] "+list[i].command )
    }
  }
}
//Add Function:
function add(splittingText)
{
  var addedTask ;
  if(splittingText[1])
  {
    //ArrayList.push(splittingText[1]);
    splittingText.shift();
    list.push({
      command: splittingText.join().replace(',' , ' '),
      done: true 
    });
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
    //ArrayList.pop();
    list.pop();
  }
  else if(splittingText[1] >= list.length)
  {
    console.log(" Error! the number of the command isn't exist!")
  }
  else
  {
    list.splice(splittingText[1]-1 , 1);
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
    list.splice(list.length-1 , 1 , {command: splittingText.join() , done: false});
  }
  else
  {
    splittingText.shift();
    splittingText.shift();
    list.splice(splittingText[1]-1 , 1 , {command: splittingText.join().replace('\n' , '') , done: false});
  }
}

/*
* Check Function
*/
function check(splittingText , text)
{
  if(text === 'check\n')
  {
    console.log("Error Message!")
  }
  else if(!isNaN(splittingText[1]))
  {
    if(list[splittingText[1] - 1].done == false)
    {
      list[splittingText[1]-1].done = true
      listObjects();
    }
  }
}

/*
* UnCheck Function
*/
function uncheck(splittingText , text)
{
  if(text === 'uncheck\n')
  {
    console.log("Error Message!")
  }
  else if(!isNaN(splittingText[1]))
  {
    if(list[splittingText[1] - 1].done == true)
    {
      list[splittingText[1]-1].done = false
      listObjects();
    }
  }
}
/*
* Store data
*/
var fs = require('fs');
function SaveData(data , loc)
{
  try
  {
    fs.writeFileSync(loc , JSON.stringify(data))
  }
  catch(ex)
  {
    console.log(ex);
  }
}

/*
*Load Data
*/
function LoadData(loc)
{
  try
  {
    // retrieve data from file.json 
    return fs.readFileSync(loc , 'utf8')
  }
  catch(ex)
  {
    console.log(ex);
  }
}
list = JSON.parse(LoadData('Data.json'));


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  SaveData(list , 'Data.json')
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Marwa")
