import { Carousel, Image } from 'antd';
import { useState } from 'react';

import './ImagePreview.scss';

export default function ImagePreview({ item, width = '300px', height = '200px' }) {
  const [imageIndex, setImageIndex] = useState(null);

  return (
    <div className="boo-image-preview" style={{ width, height }}>
      <Image.PreviewGroup
        preview={{
          current: imageIndex,
          visible: imageIndex || imageIndex === 0,
          onVisibleChange: () => {
            setImageIndex(null);
          },
          onChange(current) {
            setImageIndex(current);
          }
        }}
        items={item.images.map((src) => ({ src }))}
      />
      <Carousel arrows dotPosition="right" autoplay>
        {item.images.map(function (image, index) {
          return (
            <div key={index}>
              <div
                onClick={function () {
                  setImageIndex(index);
                }}
                style={{
                  width,
                  height,
                  overflow: 'hidden',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
