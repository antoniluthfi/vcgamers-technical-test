import {ImageSourcePropType} from 'react-native';
import {
  ImageNotAvailable,
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  Thumbnail4,
  Thumbnail5,
  Thumbnail6,
  Thumbnail7,
  Thumbnail8,
} from 'assets/index';
import {useEffect, useState} from 'react';

const useRandomThumbnailPicker = () => {
  const [image, setImage] = useState<ImageSourcePropType>(ImageNotAvailable);

  function getRandomIndex(upperBound: number) {
    return Math.floor(Math.random() * upperBound);
  }

  function randomPickFromArray(array: ImageSourcePropType[]) {
    const index = getRandomIndex(array.length);
    return array[index];
  }

  const thumbnails = [
    Thumbnail1,
    Thumbnail2,
    Thumbnail3,
    Thumbnail4,
    Thumbnail5,
    Thumbnail6,
    Thumbnail7,
    Thumbnail8,
  ];

  useEffect(() => {
    const randomImage = randomPickFromArray(thumbnails);
    setImage(randomImage);

    return () => {
      setImage(0);
    };
  }, []);

  return {
    image,
  };
};

export default useRandomThumbnailPicker;
