import Skeleton from "react-loading-skeleton";

export default function TrendingSkeleton() {
  return (
    <div style={{ display: 'flex', gap: 12, overflow: 'hidden' }}>
      {Array.from({ length: 8 }).map((_, idx) => (
        <Skeleton
          key={idx}
          width={180}
          height={270}
          borderRadius={12}
          style={{ flex: '0 0 auto' }}
        />
      ))}
    </div>
  );
}
