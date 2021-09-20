# CV

---

## Full name
### Andrew Makarevich<br/>

- - - 

#### Contacts<br/>
- [linkedIn](https://www.linkedin.com/in/andrei-makarevich-342b0020a/)<br/>
- [Gmail](mailto:makarevich_as_18@mf.grsu.by)<br/>
- [VK](https://vk.com/id190521646)<br/>
- [Telephone number: +375291600855](tel:+375291600855)

---

#### About me

---


Hi, my name is Andrew, I'm a student, which sincerely wants to become a professional programmer in the sphere of making web applications. I really like to solve different kinds of uncommon tasks in JavaScript, HTML, and CSS. I assume that, as I love organizing design by the combination of colors, positions of elements, and fonts, and have been learning C# at the beginning of my student's life, the position of a trainee front-end developer will be the best start for me, but in perspective, I would like to become a full-stack developer.


---
#### Experience 
06.28.2021 - 07.18.2021<br/>
Throughout three weeks, as a part of summer practice, I practiced as a front-end developer in EPAM Systems, solving different tasks, learning Docker, Git, UnifiedUI, and in last days, as a final task, I did a static web page on ReactJs.

---

#### Skills

---

Hard skills | Soft skills
:---: | :---:
*HTML* | Sociable
CSS | Hardworking
JavaScript | Enthusiastic
ReactJs | Friendly
NodeJs(Express, Sequilize, postgreSQL) | 
Git | 

---

### Code examples

---

#### Code wars | Run-length encoding (6 kyu)

**Essence of the task:** If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

````JavaScript
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
        }
````

#### Code wars | Function Cache (5 kyu)

**Essence of the task:** Your task is to write such a run-length encoding.For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

````JavaScript
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
                      const key = `${argumentsKey}`;
                      if(key in cache){
                        return cache[key];
                      }else{
                        cache[key] = func(...argumentsArray);
                        return cache[key];
                      }
                    }
                  }
````

---
### Education

---
2018 - 2022: Yanka Kupala State University of Grodno

Speciality: Information resources management

---
Mr.English language course, B1.

### English level: B1