import { ImgItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures.map(picture => {
        return (
          <li key={picture.id}>
            <ImgItem picture={picture} />
          </li>
        );
      })}
    </ul>
  );
};
