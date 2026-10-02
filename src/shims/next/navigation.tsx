import { useEffect, useState } from 'react';

export function notFound(): never {
  const error = new Error('NEXT_NOT_FOUND');
  (error as unknown as { digest: string }).digest = 'NEXT_NOT_FOUND';
  throw error;
}

export function redirect(url: string): never {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
  const error = new Error(`NEXT_REDIRECT: ${url}`);
  (error as unknown as { digest: string }).digest = `NEXT_REDIRECT;replace;${url};307;`;
  throw error;
}

export function usePathname(): string {
  const [pathname, setPathname] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('applet-navigate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('applet-navigate', handleLocationChange);
    };
  }, []);

  return pathname;
}

export function useRouter() {
  return {
    push(url: string) {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', url);
        window.dispatchEvent(new Event('applet-navigate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    replace(url: string) {
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', url);
        window.dispatchEvent(new Event('applet-navigate'));
      }
    },
    back() {
      if (typeof window !== 'undefined') {
        window.history.back();
      }
    },
    forward() {
      if (typeof window !== 'undefined') {
        window.history.forward();
      }
    },
    refresh() {
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    },
    prefetch() {},
  };
}

export function useSearchParams(): URLSearchParams {
  const [searchParams, setSearchParams] = useState(() =>
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams()
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('applet-navigate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('applet-navigate', handleLocationChange);
    };
  }, []);

  return searchParams;
}
