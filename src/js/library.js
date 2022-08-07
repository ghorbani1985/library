'use strict';
document.getElementById('dateNow').innerText = " تاریخ امروز :  "  + new Date().toLocaleDateString('fa-IR');
const libraryBooks = [];
const bookName = document.getElementById('bookName');
const booksBody = document.getElementById('booksBody');
const libraryBookForm = document.getElementById('libraryBookForm');
function addBook(){
    if(bookName.value != ""){
        libraryBooks.push(bookName.value);
        refreshResult();
       bookName.value = "";
    }
}
function deleteBook(index) {
    let codeBooks = fixNumbers(bookName.value);
    if(confirm(" آیا قصد حذف کتاب با کد " + codeBooks + " را دارید؟ ")){
        if (index != undefined){
            libraryBooks[index] = undefined;
        }else if (codeBooks != "") {
          libraryBooks[codeBooks - 1] = undefined;
        }
        refreshResult();
    }
     bookName.value = '';
}

function refreshResult(){
    let resultTable = "";
   for (let index = 0; index < libraryBooks.length; index++) {
    if (libraryBooks[index] == undefined ) continue;
      resultTable +=
        '<tr class="odd:bg-slate-100 even:bg-slate-300"><td class="border border-white text-slate-800 p-2 rounded-md">' +
        (index + 1) +
        '</td>' +
        '<td class="border border-white text-slate-800 p-2 rounded-md">' +
        libraryBooks[index] +
        '</td>' + 
        '<td class="border border-white text-slate-800 p-2 rounded-md">' +
        '<a onclick="deleteBook(' + index + ')" class="text-red-500 cursor-pointer flex justify-center align-items"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg></a>'
        +'</td></tr>';
    }
    booksBody.innerHTML = resultTable;
}
let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
  englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
  fixNumbers = function (str) {
    if (typeof str === 'string') {
      for (let i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(englishNumbers[i], i);
      }
    }
    return str;
  };

