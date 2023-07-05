import React, { useContext } from 'react';
import { CurrentLinksContext } from '../helpers/AppProviders';
import { LinkURL } from './LinkURL';

export const Links = () => {
  const { links } = useContext(CurrentLinksContext);
  return (
    <>
      {links.map((link) => {
        return (
          <div
            key={link.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid black',
              padding: '10px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ margin: 0, textTransform: 'uppercase' }}>
                <strong>GUID: </strong>
              </p>
              <p style={{ margin: 0, textTransform: 'uppercase' }}>
                {link.shortcode_guid}
              </p>
            </div>

            <LinkURL
              redirect_url={link.redirect_url}
              guid={link.shortcode_guid}
            />
          </div>
        );
      })}
    </>
  );
};
