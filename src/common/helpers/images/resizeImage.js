import loadImage from 'blueimp-load-image';

const resizeImage = async image =>
  new Promise((resolve, reject) => {
    loadImage(
      image,
      (canvas) => {
        if (canvas.type === 'error') {
          reject();
        }
        canvas.toBlob(
          (blob) => {
            resolve(new File([blob], image.name, { type: blob.type }));
          },
          image.type,
          0.97,
        );
      },
      {
        orientation: true,
        maxWidth: 1260,
        maxHeight: 720,
        canvas: true,
      },
    );
  });

export default resizeImage;
