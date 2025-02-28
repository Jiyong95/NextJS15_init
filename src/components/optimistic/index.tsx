'use client';
import { useOptimistic, useState, useTransition } from 'react';

import Icon, { IconOption } from '@atoms/icon';

const Optimistic = () => {
  const [liked, setLiked] = useState(false);

  const [optimisticLiked, setOptimisticLiked] = useOptimistic<boolean, boolean>(
    liked,
    (currState, newValue) => newValue,
  );

  // setOptimistic 함수는 startTransition 안에서 사용되어야함.
  const [isPending, startTransition] = useTransition();

  // 성공 케이스
  const handleOptimistic = () => {
    startTransition(async () => {
      try {
        //optimistic 상태 업데이트
        setOptimisticLiked(!liked);
        const updateLikes = await update(liked);
        // 실제 상태 업데이트
        setLiked(updateLikes);
      } catch (error) {}
    });
  };

  // 실패 케이스
  const handleOptimisticError = () => {
    startTransition(async () => {
      try {
        setOptimisticLiked(!liked);
        const updateLikes = await updateError(liked);
        setLiked(updateLikes);
      } catch (error) {}
    });
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <h1>Success Case</h1>
        <button onClick={handleOptimistic} disabled={isPending}>
          <Icon
            name={IconOption.name.HEART_FILL}
            fill={optimisticLiked ? IconOption.fill.ACCENT_PINK : IconOption.fill.DEFAULT}
          />
        </button>
        {isPending && <small>isPending</small>}
        <div>
          <p>실제 Liked 값: {`${liked}`}</p>
          <p>Optimistic Liked 값: {`${optimisticLiked}`}</p>
        </div>
      </div>
      <div>
        <h1>Error Case</h1>
        <button onClick={handleOptimisticError} disabled={isPending}>
          <Icon
            name={IconOption.name.HEART_FILL}
            fill={optimisticLiked ? IconOption.fill.ACCENT_PINK : IconOption.fill.DEFAULT}
          />
        </button>
        {isPending && <small>isPending</small>}
        <div>
          <p>실제 Liked 값: {`${liked}`}</p>
          <p>Optimistic Liked 값: {`${optimisticLiked}`}</p>
        </div>
      </div>
    </div>
  );
};

// 업데이트 함수 - 성공
const update = (likes: boolean): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!likes);
    }, 2000);
  });
};

// 업데이트 함수 - 실패
const updateError = (likes: boolean): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('좋아요 업데이트에 실패했습니다.'));
    }, 2000);
  });
};

export default Optimistic;
