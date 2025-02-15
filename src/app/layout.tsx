import type { Metadata } from 'next';
import '@styles/reset.scss';
import localFont from 'next/font/local';

import { ToastProvider } from '@atoms/toast';
import QueryClientProvider from '@components/common/layout/QueryClientProviders';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

/**
 * @doc https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts
 * @description 로컬 폰트 사용하기
 * */

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2', //상대경로로 입력해야함.
  fallback: ['Pretendard', 'sans-serif'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ko' className={pretendard.className}>
      <body>
        <QueryClientProvider>
          <ToastProvider>{children}</ToastProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
