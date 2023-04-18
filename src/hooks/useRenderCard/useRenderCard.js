import { useState, useEffect } from "react";

const useRenderCard = (width) => {
  const [renderLength, setRenderLength] = useState({
    valueAdd: null,
    valueLength: 1,
  });

  const renderConfig = {
    desktop: 769 <= width,
    tablet:  481 <= width && width >= 768,
    mobile: 320 <= width && width >= 480,
  }

  useEffect(() => {
    switch(true) {
      case (renderConfig.desktop):
        setRenderLength({
          valueLength: 5,
          valueAdd: 3,
        });
        break;
      case (renderConfig.tablet):
        setRenderLength({
          valueLength: 8,
          valueAdd: 2,
        });
        break;
      case (renderConfig.mobile):
        setRenderLength({
          valueLength: 12,
          valueAdd: 2,
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