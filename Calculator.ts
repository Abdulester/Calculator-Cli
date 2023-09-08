import inquirer from 'inquirer';

async function promptUser(): Promise<void> {
    const question = [
        {
            type : 'input',
            name : 'num1',
            message: 'Enter the first number:',
            validate: (input: string) => !isNaN(parseFloat(input))|| 'Please enter a valid number',
        },
        {
            type : 'input',
            name : 'num2',
            message: 'Enter the Second number:',
            validate: (input: string) => !isNaN(parseFloat(input))|| 'Please enter a valid number', 
        },
        {
            type : 'list',
            name : 'operation',
            message : 'Selection operation:',
            choices : ['Addition' , 'Subraction', 'Multiplication', 'Division'],
        },
    ];
    
    const answer = await inquirer.prompt(question);
    const num1 =parseFloat(answer.num1);
    const num2 = parseFloat (answer.num2);

    let result: number;

    switch (answer.operation) {
        case 'Addition':
            result = num1 + num2;
            break;
            case 'Subraction':
                result =num1 - num2;
                break;
                case 'Multiplication':
                    result = num1 * num2;
                    break;
                    case 'Division':
                        result = num1 / num2;
                        break; 
    }
console.log('Result: ${result');
}
promptUser()

