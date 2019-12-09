import React from "react";

export const loading = (fullpage = false) => {
  if (fullpage){
    return (
      <div className="loading-fullpage-background">
        <div className="loading-fullpage-container">
          <h2 className="loading-text">Loading...</h2>
          <div className="loading"></div>
        </div>
      </div>
    );   
  }else {
    return (
      <div className="loading-container"> 
        <div className="loading-wrapper">
          <h2 className="loading-text">Loading...</h2>
          <div className="loading"></div>
        </div>
      </div>
    );    
  }
};
export const noItemsFound = () => {
  return (
    <div className="util-no-items">
      <h2>No items found</h2>
    </div>
  );
};

export const errorsList = (errors) => {
  if (!errors || errors.length <= 0) return null;
  const errorsLi = errors.map((error, ix) => {
    return <li key={ix}>{error}</li>
  })
  return <div className="form-errors-container">
      <ul>{errorsLi}</ul>
  </div>;
};

export const imgProductCart = (imgSrc) => {
  imgSrc = imgSrc || window.pagePics.placeholders.default;
  return (
    <div className="img-wrapper">
      <img className="img-product img-product-cart" src={imgSrc} />
    </div>
  );
};
export const imgProductIndex = (imgSrc) => {
  imgSrc = imgSrc || window.pagePics.placeholders.default;
  return (
    <div className="img-wrapper">
      <img className=" img-product img-product-index" src={imgSrc} />
    </div>
  );
};
export const imgProductShow = (imgSrc) => {
  imgSrc = imgSrc || window.pagePics.placeholders.default;
  return (
    <div className="img-wrapper">
      <img className="img-product img-product-show" src={imgSrc} />
    </div>
  );
};
export const imgIcon = (imgSrc) => {
  return (
    <div className="img-wrapper">
      <img className="img-icon img-icon-small" src={imgSrc} />
    </div>
  );
};

export const itemQuantity = (product, lineItem, callBack) => {
  if (product.quantity <= 0) {
    return <div>This product is currently sold out</div>;
  }else {
    const options = [];
    let preSelected = (lineItem && lineItem.quantity > 0) 
      ? lineItem.quantity : 1;
    for (let i = 1; i <= product.quantity; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    };
    return <div className="quantity-options-container">
      <select className="quantity-options-selector"
        onChange={callBack} defaultValue={preSelected}>
        {options}
      </select>
    </div>;
  };
};

export const categoryOptions = (categories, callBack, preSelectedId = 1) => {
  if (!categories || categories.length < 1) return null;
    const options = [];
    let startIX = 0;
    if (!preSelectedId){ 
      startIX = 1;
     // preSelectedId = 0;
      options.push(
        <option key={0} value={0} disabled>Select a Category</option>);
    };
    for (let i = startIX; i < categories.length; i++) {
      const category = categories[i];
      options.push(<option key={i} value={category.id}>{category.name}</option>)
    };
    // debugger
    return <div className="quantity-options-container">
      <select required className="quantity-options-selector"
        onChange={callBack} defaultValue={preSelectedId? preSelectedId : 0}>
        {options}
      </select>
    </div>;
};


export const setDarkMode = (setEnabled)=> {
  const appColorVars = {
    pageA: '--app-bg-color-page',
    pageB: '--app-bg-color-page-b',
    header: '--app-bg-color-header',
    footerA: '--app-bg-color-footer-a',
    footerB: '--app-bg-color-footer-b',
    search: '--app-bg-color-search',
    searchBtnHover: '--app-bg-color-search-btn-hover',
    searchBtnFocus: '--app-bg-color-search-btn-focus',
    search: '--app-bg-color-search',
    borderA: '--app-border-color-a',
    borderB: '--app-border-color-b',
    whatIsBetsy: '--app-bg-color-wib',
    fontPage: '--app-font-color-page',
    fontFooter: '--app-font-color-footer',
    fontNavOptions: '--app-font-color-nav-options',
    fontCategories: '--app-font-color-categories',
    fontHover: '--app-font-color-hover',
  }
  const body = document.getElementById('main-body');

  const enable = () => {
    const colorDarkMode = {
      pageA: 'rgb(39, 39, 39)',
      pageB: 'rgb(107, 107, 107)',
      header: 'rgb(39, 39, 39)',
      footerA: 'rgb(0, 0, 0)',
      footerB: 'rgb(17, 17, 17)',
      search: 'rgb(26, 26, 26)',
      searchBtnHover: 'rgb(48, 48, 48)',
      searchBtnFocus: 'rgb(0, 0, 0)',
      borderA: 'rgb(255, 255, 255)',
      borderB: 'rgb(255, 255, 255)',
      whatIsBetsy: 'rgb(107, 107, 107)',
      fontPage: 'rgb(255, 255, 255)',
      fontFooter: 'rgb(255, 255, 255)',
      fontNavOptions: 'rgb(255, 255, 255)',
      fontCategories: 'rgb(255, 255, 255)',
      fontHover: 'rgb(255, 255, 255)',

    };
    Object.keys(appColorVars).forEach((key) => {
      body.style.setProperty(appColorVars[key], colorDarkMode[key]);
    });
  };

  const disable = () => {
    const colorDefault = {
      pageA: 'rgb(255, 255, 255)',
      pageB: 'rgb(137, 161, 187)',
      header: 'rgb(255, 255, 255)',
      footerA: 'rgb(45, 53, 61)',
      footerB: 'rgb(81, 96, 110)',
      search: 'rgb(236, 236, 236)',
      searchBtnHover: 'rgb(187, 185, 185)',
      searchBtnFocus: 'rgb(0, 0, 0)',
      borderA: 'rgba(34, 34, 34, 0.15)',
      borderB: 'rgba(34, 34, 34, 0.15)',
      whatIsBetsy: 'rgb(245, 222, 179)',
      fontPage: 'rgb(0, 0, 0)',
      fontFooter: 'rgb(255, 255, 255)',
      fontNavOptions: 'rgb(70, 70, 70)',
      fontCategories: 'rgb(70, 70, 70)',
      fontHover: 'rgb(0, 0, 0)',
    };
    Object.keys(appColorVars).forEach((key) => {
      body.style.setProperty(appColorVars[key], colorDefault[key]);
    });
  };

  setEnabled? enable() : disable();
};