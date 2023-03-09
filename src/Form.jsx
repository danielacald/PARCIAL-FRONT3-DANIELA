import { useState } from 'react';
import Card from './components/Card';

const Form = () => {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 3 || /^\s/.test(name)) {
    setError('Por favor chequea que la información sea correcta');
    return;
    }
    if (description.trim().length < 6) {
    setError('Por favor chequea que la información sea correcta');
    return;
    }
    setError('');
    setName('');
    setDescription('');
};

return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Nombre de la canción: </label>
    <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <label htmlFor="description"> Descripción: </label>
    <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
    />
    <button type="submit">Enviar</button>
    {error && <p>{error}</p>}
    {!error && name && description && <Card name={name} description={description} />}
    </form>
);
};

export default Form;
