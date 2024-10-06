export default function Student({Person,uni="City University"}){
    return (
        <div>
            <h3>He's name is {Person.name}.He is {Person.age} years old.<br></br>
                he studied at {uni} </h3>
        </div>
    );
}