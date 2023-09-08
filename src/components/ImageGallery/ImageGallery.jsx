import { ImgItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ picture }) => {
  return (
    <ul>
      {pictures.map(picture => {
        return (
          <li key={picture.id} onClick={this.openModal}>
            <ImgItem picture={picture} />
          </li>
        );
      })}
    </ul>
  );
};
