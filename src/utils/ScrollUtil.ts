import { RefObject } from 'react';

export default class ScrollUtil {
  /**
   * @param ref - 스크롤할 대상 요소의 ref
   * @param yOffset - ref에서 여백을 얼마나 줄지 설정하는 값
   *                  (100 => ref의 위치에서 100px 아래로 스크롤, -100 => ref의 위치에서 100px 위로 스크롤)
   * @param scrollContainerId - 스크롤이 적용된(overflow-y) 컨테이너의 ID (없으면 window에서 스크롤)
   */
  static scrollToRef = (ref: RefObject<HTMLDivElement | null>, yOffset = 0, scrollContainerId?: string) => {
    if (!ref.current) return;

    if (scrollContainerId) {
      // 특정 컨테이너 ID를 기반으로 컨테이너 찾기
      const scrollContainer = document.getElementById(scrollContainerId);

      if (!scrollContainer) return;
      // 컨테이너 내부에서 스크롤 이동
      const refTop = ref.current.getBoundingClientRect().top; // 요소의 뷰포트 내 위치
      const containerTop = scrollContainer.getBoundingClientRect().top; // 컨테이너의 뷰포트 내 위치

      const y = refTop - containerTop + scrollContainer.scrollTop + yOffset;

      return scrollContainer.scrollTo({ top: y, behavior: 'smooth' });
    }

    // scrollContainerId가 없으면 window에서 스크롤 이동
    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
}
