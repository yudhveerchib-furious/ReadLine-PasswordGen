import readline from 'readline/promises' //uses promise based readline
import { stdin as input,stdout as output} from 'process'


const rl = readline.createInterface({input,output});

//function password generator
const genpass = (length,specailChar) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'+specailChar;
    let password = specailChar;//password must have one special character
    
    for(let i = 1 ; i <length;i++){
        password += chars.charAt(Math.floor(Math.random()*chars.length));
    }
   
    return password.split(',').sort(()=>Math.random().join(' '))
}


async function main(){
    const name = await rl.question('What is Your Name');
    const number = await rl.question('What is your fav number ?');
    const specailChar = await rl.question('What is yout special character?');  
    const lengthInput = await rl.question('how long should be your length (min 8)');
  

    const length = Math.max(8,parseInt(lengthInput,10))
    const password = genpass(length,specailChar);
   
    console.log(`\n Hi! ${name}, `);
    console.log(`\ passis : ${password}`);
    rl.close();
}
main()