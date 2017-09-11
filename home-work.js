1.
function transform (val) {
    var float = val.toFixed(2);
    return `${float}$`;
}

transform(5.12);
transform(3);
transform(3.1);


2. 
function getDrinkByProfession(str) {
    var profession = str.toLowerCase();

    var map = {
        'jabroni': 'Patron Tequila',
        'school counselor': 'Anything with Alcohol',
        'programmer': 'Hipster Craft Beer',
        'bike gang member': 'Moonshine',
        'politician': 'Your tax dollars',
        'rapper': 'Cristal'
    };

    return map[profession] ? map[profession] : 'Beer';
    // switch(profession) {
    //     case 'jabroni':
    //     console.log('Patron Tequila');
    //     break;
    //      case 'school counselor':
    //     console.log('Anything with Alcohol');
    //     break;
    //      case 'programmer':
    //     console.log('Hipster Craft Beer');
    //     break;
    //      case 'bike gang member':
    //     console.log('Moonshine');
    //     break;
    //      case 'politician':
    //     console.log('Your tax dollars');
    //     break;
    //      case 'rapper':
    //     console.log('Cristal');
    //     break;
    //     default:
    //     console.log('Beer');
    // }
};

getDrinkByProfession('Jabroni');
getDrinkByProfession('Bike Gang Member');
getDrinkByProfession('Rapper');



3.
function bandName(val) {
    var length = val.length;
    var a = val.charAt(0);
    var b = val.charAt(length-1);
    var up = a.toUpperCase();
    val = val.replace(a,up);

    if ( a===b ) {
        var c = val.substr(1,length);

        console.log(val.concat(c));
    } else {

        console.log('The' + ' ' + val);
    }
};

bandName('alaska');
bandName('europe');
bandName('hvjgvbm');



4.
function average(arr) {
    const firstEl = arr.shift();

    return arr.reduce((prev, next, index) => {
        return prev.map((item, i) => {
            return item + next[i];
        });
    }, firstEl).map(item => {
        return item / (arr.length + 1);
    });
}

const array = [[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]];

console.log(average(array));

5.
function deepCount(arr) {
    let count = 0;

    arr.forEach(item => {
        if (Array.isArray(item)) {
            count += deepCount(item);
        }

        count ++;
    });

    return count;
}

const arr = [1, 2, [3, 4, [5]]];

console.log(deepCount(arr));

6.
    function functionator(str) {
        const methods = str.split(' ');

        methods.forEach(item => {
            this[item] = function (something) {
                console.log(item);
                return this;
            }
        });

        return this;
    }

    const obj = functionator('there are two kinds of people');

    obj.two().kinds();