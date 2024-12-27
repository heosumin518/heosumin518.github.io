  // Giscus Iframe 로드 후 테마 동기화
  function setGiscusTheme() {
    const html = document.documentElement;
    const theme = html.getAttribute('data-mode') === 'dark' ? 'dark' : 'light';
    const iframe = document.querySelector('iframe.giscus-frame');

    if (iframe) {
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme: theme } } },
        'https://giscus.app'
      );
    }
  }

  // 페이지 로드 후 초기화
  window.addEventListener('load', () => {
    setGiscusTheme();

    // 데이터 속성 변경 시 테마 업데이트
    const observer = new MutationObserver(() => {
      setGiscusTheme();
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode'] });
  });