import { makeAutoObservable } from "mobx";
export class CodeExamplesStore {
    constructor() {
        this._codeInfo = [
            {
                "title": "Code wars | Run-length encoding (6 kyu)",
                "description": "Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.",
                "example": `
    var runLengthEncoding = function(str){
        const lettersArray = str.split('');
        let finalArray = [];
        let sameLettersArray = [];
        lettersArray.reduce((prevV, curV, index)=>{
            if(prevV === curV){
                sameLettersArray.push(curV);
            }else{
                finalArray.push(sameLettersArray);
                sameLettersArray = [];
                sameLettersArray.push(curV); 
            }
            if(index === str.length-1){
                finalArray.push(sameLettersArray);
            }
            return curV;
        }, lettersArray[0]);
        return finalArray.map(array=>{
            return array = [array.length, array[0]];
            });          
        }`
            },
            {
                "title": "Code wars | Function Cache (5 kyu)",
                "description": "If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.",
                "example": `
                function cache(func) {
                    let cache = {}; //Кэш функции
                  
                    return function (){
                      let argumentsArray = []; // Аргументы для реализаци функции
                      let argumentsKey = []; // Аргументы для создания и поиска уникального ключа
                      
                      for(arg of arguments){
                        if(typeof(arg)==='object'){
                          argumentsArray = [...argumentsArray, arg];
                          argumentsKey = [...argumentsKey, JSON.stringify(arg)];
                        }else{
                          argumentsArray = [...argumentsArray, arg];
                          argumentsKey = [...argumentsKey, arg];
                        }
                        
                      }
                      const key = \`\${argumentsKey}\`;
                      if(key in cache){
                        return cache[key];
                      }else{
                        cache[key] = func(...argumentsArray);
                        return cache[key];
                      }
                    }
                  }
                `
            }
        ];
        makeAutoObservable(this);
    }
    get codeInfo() {
        return this._codeInfo;
    }
    set codeInfo(info) {
        this._codeInfo = info;
    }
}