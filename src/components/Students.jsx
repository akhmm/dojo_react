import { useState } from 'react'

function Students( {firstName, lastName} ){
//adding state for react



const [understood, setUnderstood] = useState (false);
const handleReact = () => {
    setUnderstood(current => !current)
}

return (
    <div>
        <p>{firstName} {lastName}</p>
        <p>{understood ? "Je comprends React" : "Je ne comprends pas React"}</p>
        <button onClick={handleReact}>{understood ? "en fait j'ai rien compris" : "ça y'est je suis trop fort"}</button>
    </div>
)

}

export default Students