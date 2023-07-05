import React, { FC, useContext } from 'react';
import { updateLink } from '../helpers/api';
import { CurrentLinksContext } from '../helpers/AppProviders';

export const LinkURL: FC<{
  redirect_url: string;
  guid: string;
}> = ({ redirect_url, guid }) => {
  const [input, setInput] = React.useState(redirect_url);
  const { fetchLinks } = useContext(CurrentLinksContext);

  const handleUpdateURL = async () => {
    const result = await updateLink(guid, { redirect_url: input });
    if (!result.error) {
      await fetchLinks();
    } else {
      setInput(redirect_url);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      }}
    >
      <input
        style={{ width: '100%', fontSize: 20 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ fontSize: 20 }} onClick={handleUpdateURL}>
        Save
      </button>
    </div>
  );
};
