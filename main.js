let input = document.getElementById('inputBox')
let output = document.getElementById('outputBox')
output.value = '=0'
let buttons = document.querySelectorAll('button')
let string = ""

let arr = Array.from (buttons)
arr.forEach(buttons =>{
    
    buttons.addEventListener('click',  (e)=>{
        if(e.target.innerHTML == '=')
        {
            string = eval(string)
            output.value = string
            
        }
        else if(e.target.innerHTML == 'AC')
        {
            string =''
            input.value =string;
            output.value = '=0'          
        }
        else if(e.target.innerHTML == 'DE')
        {
            string =string.slice(0,-1);
            input.value =string
        }

        else{
            string+=e.target.innerHTML
            input.value = string;
        }        
    })
})



//////////////////////////////////////////////
// cac ham co ban
// console.log(fullName+" "+ age)
// console.warn(fullName+" "+ age)
// console.error(fullName+" "+ age)

// confirm('xac nhan du tuoi')
// prompt('xac nhan du tuoi')

// setTimeout(function () {
// alert("thong bao")
// },1000 )

// setInterval(function () {
// alert("thong bao")
// },1000 )

//////////////////////////////////////////////

// cac bien co ban
// so hoc + - * /
// gan =
// so sanh == >= <= < >
// logic

// var a = 1+2
// console.log (a)
// var b=3;

// if(a==b)
// {
//     alert('dung')
// }
// else alert('sai')

// if(a>0&&b>0)
// {
//     alert('a va b lon hon 0')
// }

//////////////////////////////////////////////////
/**toan tu so hoc 
+   -->cong
-   -->tru
*   -->nhan
**  -->luy thua
/   -->chia
%   -->du
++  -->+1
--  -->-1
*/

/**toan tu gan
=       -->bang     x=y
+=      -->cong     x=x+y
-=      -->tru      x=x-y
*=      -->nhan     x=x*y
**=     -->luy thua x=x**y
/=      -->chia     x=x/y
*/

/**toan tu chuoi
*String operater
var name = 'Tran Hai';
name += ' Nam'
console.log(name)
*/

/**Toan tu so sanh
 * ==
 * !=
 * >
 * <
 * <=
 * >=
 */

/**
 * Boolean
 */

/**
 * If - Else
*/

/**
 * Logical
 * &&
 * ||
 * !
 */

/**
 * Kieu du lieu
 * Kieu du lieu nguyen thuy
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * Kieu du lieu phuc tap
 * - Function
 * - Object
 */

/**Toan tu so sanh 2  (so sanh ca kieu gia tri (datatype) va gia tri (value))
 * ===      Bang tuyet doi  
 * !==      Khac tuyet doi
 */

// Chuoi
// ' toi la /'Tran Nam/' '
// ' toi la ${name} '
//  
// var myString = '   Nam la Nam gioi tuyet nhat   '
// //Length
// console.log(myString.length);
// //Find
// console.log(myString.indexOf('a'));
// console.log(myString.indexOf('a',4));
// console.log(myString.lastIndexOf('a'));
// //Search
// console.log(myString.search('a'));
// //Cut
// console.log(myString.slice(4, 6))
// console.log(myString.slice(-4, -1))
// //Replace
// console.log(myString.replace('Nam', 'duong'))
// console.log(myString.replace(/Nam/g, 'duong'))
// //UpperKey
// console.log(myString.toUpperCase(myString))
// console.log(myString.toLowerCase (myString))
// //trim
// console.log(myString.trim().length)
// //Split
// var languages = 'JS, PHP, Ruby';
// console.log(languages.split(', '));
// console.log(myString.split(''));
// //Char by index
// console.log(typeof(myString.charAt(15)));
// console.log(typeof(myString[15]));

//////////////////////////////////////////////

//Number
// var age = 16
// var pi = 3.1245
// var result = 20/ 'a'
// console.log(typeof(age))
// console.log(typeof(age.toString()));
// console.log(pi.toFixed())
// console.log(pi.toFixed(1))
// console.log(pi.toFixed(5))

//////////////////////////////////////////////

//Mang 
// var languages = [
//    'JS',
//    'PHP',
//    'Ruby',
//    'Root',
// ];

// console.log(languages)
// console.log(typeof(languages))
// console.log(Array.isArray(languages))
// console.log(languages.length)
// console.log(languages[2])

// console.log(languages.toString())
// console.log(languages.join('(bigAssLover)'))

// console.log(languages)
// //xoa cuoi
// console.log('Xoa cuoi:' +languages.pop())
// console.log(languages)
// //them cuoi
// console.log('Them ' +languages.push('Root','Java'))
// console.log(languages)
// //xoa dau
// console.log('Xoa dau:' +languages.shift())
// console.log(languages)
// //them dau
// console.log('them dau:' +languages.unshift('Dart','JS'))
// console.log(languages)
// //xoa tu a, b phan tu thay bang 3 4
// console.log(languages.splice(1,2,'3','4'))
// //ghep 2 array
// console.log(languages.concat(languages))
// //lay thong tin mang tu a dem b
// console.log(languages.slice(2,4))

//////////////////////////////////////////////

//Function

// function showDialog(message1,message2){
//     if(message1)
//         console.log(message1)
//     if(message2)
//         console.log(message2)

// }
// showDialog('test','test2')

// function showDialog2(message1,message2){
//     myString = '';
//     console.log(arguments)
//     for(var param of arguments){
//         myString += `${param}--`
//     }
//     console.log(myString)
// }
// showDialog2('test','test2')

// // var isConfirm = confirm('Message')
// // console.log(isConfirm)

// // function showMessage(){
// //     function showMessage2(){
// //         console.log('show mess 2')
// //     }   
// //     showMessage2();
// // }
// // showMessage()

// //co the goi truoc khai bao
// showMessage();
// function showMessage(){
//         console.log('showMESS')
// }
// //chi co the goi sau khai bao
// var showMeYourPanty = function(){
//     console.log('showMeYourPanty')
// }
// showMeYourPanty();

///////////////////////////////////////////////

// //array working
// var courses = [
// {
//     id:1,
//     name: 'RAct',
//     coin: 0
// },
// {
//     id:2,
//     name: 'Ruby',
//     coin: 500
// },
// {
//     id:3,
//     name: 'RAct',
//     coin: 0
// },
// ]
// //foreach
// courses.forEach(function(cource,index){
//     console.log(index , cource)
// });//call back
// //every
// var isFree = courses.every(function(cource,index){
//     return cource.coin === 0
// });
// //some
// console.log(isFree);
// // neu return true thi moi tien den phan tu tiep theo
// var isFree = courses.some(function(cource,index){
//     return cource.coin === 0
// });
// console.log(isFree);
// // neu return false thi moi tien den phan tu tiep theo
// var cource = courses.find(function(cource,index){
//     return cource.name === 'Ruby'
// });
// console.log(cource);
