import React from "react";

export const loading = () => {
  return (
    <div className="util-loading">
      Loading...
    </div>
  );
};
export const noItemsFound = () => {
  return (
    <div className="util-no-items">
      No items found
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
      pageA: 'rgba(73, 73, 73)',
      pageB: 'rgb(107, 107, 107)',
      header: 'rgba(73, 73, 73)',
      footerA: 'rgb(0, 0, 0)',
      footerB: 'rgb(107, 107, 107)',
      search: 'rgb(54, 54, 54)',
      borderA: 'rgb(255, 255, 255)',
      borderB: 'rgb(255, 255, 255)',
      fontPage: 'rgb(255, 255, 255)',
      fontFooter: 'rgb(255, 255, 255)',
      fontNavOptions: 'rgb(255, 255, 255)',
      fontCategories: 'rgb(255, 255, 255)',
    };
    Object.keys(appColorVars).forEach((key) => {
      debugger
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
      search: 'rgb(34, 34, 34)',
      borderA: 'rgba(34, 34, 34, 0.15)',
      borderB: 'rgba(34, 34, 34, 0.15)',
      fontPage: 'rgb(0, 0, 0)',
      fontFooter: 'rgb(255, 255, 255)',
      fontNavOptions: 'rgb(70, 70, 70)',
      fontCategories: 'rgb(70, 70, 70)',
    };
    Object.keys(appColorVars).forEach((key) => {
      debugger
      body.style.setProperty(appColorVars[key], colorDefault[key]);
    });
  };

  setEnabled? enable() : disable();
};