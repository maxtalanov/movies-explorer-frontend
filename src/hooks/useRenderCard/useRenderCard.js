import { useState, useEffect } from "react";
import { WIDTH_DISPLAY_CARD } from 'utils/constant';

const useRenderCard = (width) => {
  const [renderLength, setRenderLength] = useState({
    valueAdd: null,
    valueLength: 1,
  });

  const renderConfig = {
    desktop: WIDTH_DISPLAY_CARD.DESCTOP.WIDTH <= width,
    tablet:  WIDTH_DISPLAY_CARD.TABLET.WIDTH <= width && width > WIDTH_DISPLAY_CARD.DESCTOP.WIDTH,
    mobile: WIDTH_DISPLAY_CARD.MOBILE.WIDTH <= width && width > WIDTH_DISPLAY_CARD.TABLET.WIDTH,
  }

  useEffect(() => {
    switch(true) {
      case (renderConfig.desktop):
        setRenderLength({
          valueLength: WIDTH_DISPLAY_CARD.DESCTOP.VALUE_LENGHT,
          valueAdd: WIDTH_DISPLAY_CARD.DESCTOP.VALUE_ADD,
        });
        break;
      case (renderConfig.tablet):
        setRenderLength({
          valueLength: WIDTH_DISPLAY_CARD.TABLET.VALUE_LENGHT,
          valueAdd: WIDTH_DISPLAY_CARD.TABLET.VALUE_ADD,
        });
        break;
      case (renderConfig.mobile):
        setRenderLength({
          valueLength: WIDTH_DISPLAY_CARD.MOBILE.VALUE_LENGHT,
          valueAdd: WIDTH_DISPLAY_CARD.MOBILE.VALUE_ADD,
        });
        break;
      default:
        break;
      }
  }, [renderConfig.desktop, renderConfig.mobile, renderConfig.tablet, width]);

  const handleClickBtn = (e) => {
    e.preventDefault();

    setRenderLength({
      valueLength: renderLength.valueLength + renderLength.valueAdd,
      valueAdd: renderLength.valueAdd,
    });
  };

  return { renderLength, handleClickBtn };
}

export default useRenderCard;