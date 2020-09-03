// Program to display only elements containing "a" in them. 

let arr2 = ['Papaya','Banana','Chikuu','Lemon','apple'];
for (let i = 0; i < arr2.length; i++) 
{
    const element = arr2[i];
    if (element.includes("a"))
    {
        console.log(element);
    }
}    
