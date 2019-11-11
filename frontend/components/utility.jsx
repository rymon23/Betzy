import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const loading = () => {
  return (
    <div className="loading-container"> 
      <div className="loading-wrapper">
        <h2>Loading...</h2>
        <div className="loading"></div>
      </div>
    </div>
  );
};
export const noItemsFound = () => {
  return (
    <div className="util-no-items">
      <h2>No items found</h2>
    </div>
  );
};

export const imgProductCart = (imgSrc) => {
  return (
    <div className="img-wrapper">
      <img className="img-product img-product-cart" src={imgSrc} />
    </div>
  );
};
export const imgProductIndex = (imgSrc) => {
  return (
    <div className="img-wrapper">
      <img className=" img-product img-product-index" src={imgSrc} />
    </div>
  );
};
export const imgProductShow = (imgSrc) => {
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
export const itemQuantity = (quantity) => {
  return (
    <div className="item-quantity-wrapper flex-row">
      <span className="">{ quantity }</span>
      <FontAwesomeIcon icon="caret-down" size="1x" />
    </div>
  );
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
    fontPage: '--app-font-color-page',
    fontFooter: '--app-font-color-footer',
    fontNavOptions: '--app-font-color-nav-options',
    fontCategories: '--app-font-color-categories',
  }
  const body = document.getElementById('main-body');

  const enable = () => {
    const colorDarkMode = {
      pageA: 'rgb(39, 39, 39)',
      pageB: 'rgb(107, 107, 107)',
      header: 'rgb(39, 39, 39)',
      footerA: 'rgb(0, 0, 0)',
      footerB: 'rgb(39, 39, 39)',
      search: 'rgb(26, 26, 26)',
      searchBtnHover: 'rgb(48, 48, 48)',
      searchBtnFocus: 'rgb(0, 0, 0)',
      borderA: 'rgb(255, 255, 255)',
      borderB: 'rgb(255, 255, 255)',
      fontPage: 'rgb(255, 255, 255)',
      fontFooter: 'rgb(255, 255, 255)',
      fontNavOptions: 'rgb(255, 255, 255)',
      fontCategories: 'rgb(255, 255, 255)',
    };
    Object.keys(appColorVars).forEach((key) => {
      // debugger
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
      fontPage: 'rgb(0, 0, 0)',
      fontFooter: 'rgb(255, 255, 255)',
      fontNavOptions: 'rgb(70, 70, 70)',
      fontCategories: 'rgb(70, 70, 70)',
    };
    Object.keys(appColorVars).forEach((key) => {
      // debugger
      body.style.setProperty(appColorVars[key], colorDefault[key]);
    });
  };

  setEnabled? enable() : disable();
};