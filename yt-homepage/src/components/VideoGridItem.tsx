type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    name: string;
    profileUrl: string;
  };
  views: number;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  postedAt: Date;
};

export default function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src="{thumbnailUrl}"
          className="block w-full h-full object-cover rounded-xl"
        />
      </a>
    </div>
  );
}
