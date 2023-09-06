import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { MagnifyingGlass } from 'react-loader-spinner';
import { fetchPictures } from 'Fetch_API';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';

export const App = () => {
  const [search, setSearch] = useState('');
  const [picture, setPicture] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const searchPic = newPic => {
    const query = `${nanoid()}/${newPic}`;
    setSearch(query.slice(query.indexOf('/') + 1, query.length));
    setPage(1);
  };

  const nextPage = () => {
    setPage(prevstate => prevstate + 1);
  };

  useEffect(() => {
    async function startFetch() {
      if (search === '') return;
      try {
        setIsLoading(true);
        const getPicture = await fetchPictures(search, page);
        setPicture(getPicture);
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    }

    startFetch();
  }, [search, page]);

  return (
    <>
      <SearchBar submitForm={searchPic} />
      {isLoading ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      ) : (
        <ImageGallery pictures={picture} />
      )}

      {picture.length !== 0 && <BtnLoadMore loadMore={nextPage} />}
    </>
  );
};
