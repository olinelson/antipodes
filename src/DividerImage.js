import React from "react";

import { Image } from "semantic-ui-react";

export default function DividerImage(props) {
    console.log("hello",props)

  const dynamicImage = () => {
    return (
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset={`https://antipodes-band-bucket.storage.googleapis.com/${props.filename}/${props.filename}desktop.jpg`}
        />
        <source
          media="(min-width: 480px)"
          srcset={`https://antipodes-band-bucket.storage.googleapis.com/${props.filename}/${props.filename}tablet.jpg`}
        />
        <source
          srcset={`https://antipodes-band-bucket.storage.googleapis.com/${props.filename}/${props.filename}phone.jpg`}
        />
        <Image fluid centered  alt="antipodes band 1" />
      </picture>
    );
  };

  return  dynamicImage()
}
