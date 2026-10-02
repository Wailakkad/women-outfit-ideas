import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ADSTERRA_SCRIPT_ID = 'adsterra-native-banner-script';
const ADSTERRA_CONTAINER_ID = 'container-98e7ff6c0a228b9c452969bda691891f';
const ADSTERRA_SCRIPT_SRC =
  'https://pl31630501.profitableratecpmnetwork.com/98e7ff6c0a228b9c452969bda691891f/invoke.js';

export function NativeBanner() {
  useEffect(() => {
    if (document.getElementById(ADSTERRA_SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = ADSTERRA_SCRIPT_ID;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = ADSTERRA_SCRIPT_SRC;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <aside
      className="w-full flex justify-center px-4 py-6"
      aria-label="Advertisement"
    >
      <div id={ADSTERRA_CONTAINER_ID} className="w-full max-w-4xl" />
    </aside>
  );
}

export function GlobalNativeBanner() {
  const pathname = usePathname();

  // On article pages the banner is placed under the cover image instead,
  // and Adsterra allows only one native banner container per page.
  if (pathname.startsWith('/blog/')) return null;

  return <NativeBanner />;
}

export default NativeBanner;
