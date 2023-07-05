import React, { createContext, FC, useEffect, useState } from 'react';
import { getLinks } from './api';
import { LinkEntity } from './interfaces';

export const CurrentLinksContext = createContext<{
  links: LinkEntity[];
  fetchLinks: () => Promise<void>;
}>({ links: [], fetchLinks: () => Promise.resolve() });

export const AppProviders: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<LinkEntity[]>([]);
  const fetchLinks = async () => {
    const res = await getLinks();
    if (!res.error) setLinks(res);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <CurrentLinksContext.Provider
      value={{
        links: links,
        fetchLinks: fetchLinks,
      }}
    >
      {children}
    </CurrentLinksContext.Provider>
  );
};
