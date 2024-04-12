const textarea=document.getElementById('textarea');
const btn=document.getElementById('btn');
const result=document.querySelector('.vowels');


btn.addEventListener('click',countvowel)

function countvowel(){
    const val=textarea.value.toLowerCase();
    const vowels=['a','e','i','o','u'];
    let count=0;
    for(let i=0;i<val.length;i++){
        if(vowels.includes(val[i])){
            count++;
        }
    }
    result.innerHTML=`: ${count}`;
}
