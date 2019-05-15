import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import styles from './PhotoAlbum.css';

function PhotoAlbum({ title, photos }) {
  return (
    <section className={styles.PhotoAlbum}>
      <h2>{title}</h2>
      <Photos photos={photos} />
    </section>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array.isRequired
};

PhotoAlbum.defaultProps = {
  title: 'An Album:'
};

export default PhotoAlbum;
