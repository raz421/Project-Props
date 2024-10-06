export  function getimageurl({Person,size='s'}){
    return (
       'https://i.imgur.com/' +
    Person.imageId +
    size +
    '.jpg'
    );
}