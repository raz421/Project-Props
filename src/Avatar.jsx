import { getimageurl } from "./getimageurl";

export default function Avatar({Person,size}){
    return (
      <img 
      src={getimageurl(Person)} 
      alt={Person.name}
      width={size}
      height={size}
       />  
    );
}