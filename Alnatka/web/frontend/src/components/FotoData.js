import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import "./FotoData.css"
// import "../components/Qeries.css"
// import "../components/Grid.css"
import Img1 from "../components/imgs/small_8_bit_1536.webp";
import Img2 from "../components/imgs/small-na-facebook_4050.webp";
import Img3 from "../components/imgs/small_7972.webp";
import Img4 from "../components/imgs/small_8_bit_MAN2208.webp";
import Img5 from "../components/imgs/small_1112.webp";
import Img6 from "../components/imgs/small_3954.webp";
import Img7 from "../components/imgs/small_7948.webp";
import Img8 from "../components/imgs/small_DSC3276.webp";
import Img9 from "../components/imgs/small_DSC1652-3.webp";
import Img10 from "../components/imgs/small_0413.webp";
import Img11 from "../components/imgs/small_DSC7129.webp";
import Img12 from "../components/imgs/small_7324.webp";
import Img13 from "../components/imgs/small_8_bit_skryté_bradavky_MAN2536.webp";
import Img14 from "../components/imgs/small_DSC3936.webp";
import Img15 from "../components/imgs/small_bez_podpisu_3255.webp";

const FotoData = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (event,{photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    { src: Img1, width: 1, height: 1, id: "photo"},
    { src: Img2, width: 1, height: 1, id: "photo" },
    { src: Img3, width: 1, height: 1, id: "photo" },
    { src: Img4, width: 1, height: 1, id: "photo" },
    { src: Img5, width: 1, height: 1, id: "photo" },
    { src: Img6, width: 1, height: 1, id: "photo" },
    { src: Img7, width: 1, height: 1, id: "photo" },
    { src: Img8, width: 1, height: 1, id: "photo"},
    { src: Img9, width: 1, height: 1, id: "photo" },
    { src: Img10, width: 1, height: 1, id: "photo" },
    { src: Img11, width: 1, height: 1, id: "photo" },
    { src: Img12, width: 1, height: 1, id: "photo" },
    { src: Img13, width: 1, height: 1, id: "photo" },
    { src: Img14, width: 1, height: 1, id: "photo" },
    { src: Img15, width: 1, height: 1, id: "photo" },
  ];

  return (
    <section className="gallery-section">
      <Gallery photos={photos} onClick={openLightbox} className="photo-gallery"  />
      <ModalGateway >
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} className="lightbox-modal">
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.src,
                caption: "Some title", // Replace with actual title or remove this line if not needed
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </section>
  );
};

export default FotoData;
