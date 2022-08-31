import { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);  // postavlja brojac na nulu

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3); 
        setName(names[int]); // pozivamo setName koja menja prvu vrednost name iz Content
    }

    const handleClick = () => {
        setCount(count + 1); // povecava za 1
        console.log(count); // prikazuje u konzoli
    }

    const handleClick2 = () => {
        console.log(count); // vraca trenutno stanje count-a
    }



    return (
        
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}
            </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={handleClick}>Click it</button>
            <button onClick={handleClick2}>Click it</button>
        </main>
        // kod buttona handleClick 2 pozivamo argument name pomocu anonimne funckije a u zagradi dodeljujemo vrednost imena 
    )
}

export default Content
