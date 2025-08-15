import Skeleton from 'react-loading-skeleton';

export function HeroSkeleton() {
    return (
        <div style={{ padding: '40px', maxWidth: 800 }}>
            <Skeleton width={80} height={14} style={{ marginBottom: 10 }} />
            <Skeleton width={400} height={48} style={{ marginBottom: 20 }} />
            <Skeleton width={200} height={20} count={3} style={{ marginBottom: 20 }} />
            <Skeleton count={3} />
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                <Skeleton width={120} height={40} />
                <Skeleton width={120} height={40} />
            </div>
        </div>
    );
}
