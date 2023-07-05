import React, { FC, useContext } from 'react';
import { CurrentLinksContext } from '../helpers/AppProviders';

export const FormAction: FC<{
  onSubmit: (guid: string) => void;
  type: string;
}> = ({ type, onSubmit }) => {
  const [input, setInput] = React.useState('');
  const { fetchLinks } = useContext(CurrentLinksContext);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await onSubmit(input);
    setInput('');
    await fetchLinks();
  };

  return (
    <form
      style={{
        margin: '10px 0',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        value={input}
        name={type}
        style={{
          marginBottom: '10px',
          height: '50px',
          width: '50%',
          fontSize: 20,
        }}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ fontSize: 20 }} onClick={handleSubmit}>
        {type}
      </button>
    </form>
  );
};
