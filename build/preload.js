"use strict";
window.addEventListener('DOMContentLoaded', function () {
    // adding css
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = 'custom-theme';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'yugen://' + process.env['APP_PATH'] + '/assets/styles.css';
    link.media = 'all';
    head.appendChild(link);
});
