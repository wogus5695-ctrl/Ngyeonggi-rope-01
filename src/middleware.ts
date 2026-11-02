import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const MAPO_COHORT_REGIONS = new Set([
  '마포구',
  '공덕동',
  '아현동',
  '도화동',
  '용강동',
  '대흥동',
  '염리동',
  '신수동',
  '서강동',
  '서교동',
  '합정동',
  '망원동',
  '연남동',
  '성산동',
  '상암동'
]);

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. 루트 경로(/)에 대해서만 검사
  if (pathname === '/') {
    const k = searchParams.get('k');
    if (k) {
      const decodedK = decodeURIComponent(k);
      const parts = decodedK.split('-');

      if (parts.length === 2) {
        const [region, service] = parts;

        // 마포구 15개 지역 + 창틀누수 코호트인 경우에만 301 영구 이전
        if (service === '창틀누수' && MAPO_COHORT_REGIONS.has(region)) {
          const targetPath = `/${encodeURIComponent(region)}/${encodeURIComponent(service)}`;
          const redirectUrl = new URL(targetPath, request.url);

          // k 파라미터 제외한 나머지 쿼리 파라미터가 있다면 보존
          searchParams.delete('k');
          searchParams.forEach((val, key) => {
            redirectUrl.searchParams.set(key, val);
          });

          return NextResponse.redirect(redirectUrl, 301);
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  // 오직 루트 경로 진입 요청에 대해서만 미들웨어 실행
  matcher: ['/'],
};
