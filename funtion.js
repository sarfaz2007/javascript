const arr = [
    {
        name: 'alice',
        mark:35,
        place: 'kannur' 
    },
    {
        name:'bob',
        mark: 28,
        place:'palakkad'
    },
    {
        name:'catherine',
        mark: 44,
        place:'thrissur'
    },
    {
        name:'danial',
        mark: 23,
        place:'kollam'
    },
];
 
var found = arr.filter((item) => {
    return item.mark  < 30 ;

  
}); 

console.log(found);

