import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  tecnologia: string;
  description: string;
  image?: string;
  link?: string;
  icon?: LucideIcon;
  accent?: string;
}

export default function Card({
  title,
  tecnologia,
  description,
  image,
  link,
  icon: Icon,
  accent = "border-neutral-200",
}: CardProps) {
  const isRemote = image?.startsWith("http");

  const imageProps = isRemote
    ? { src: image!, alt: title }
    : { src: image!, alt: title };

  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      {...(link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group rounded-2xl border ${accent} overflow-hidden hover:shadow-md transition-all duration-300 bg-neutral-900`}
    >
      {image && (
        <div className="relative w-full h-48">
          <Image
            {...imageProps}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized={true}
            alt="Project Image"
          />
        </div>
      )}

      <div className="p-5">
        {Icon && (
          <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800">
            <Icon className="h-4 w-4 text-neutral-300" />
          </div>
        )}

        <h3 className="text-lg font-semibold text-neutral-100">
          {title}
        </h3>
        <small className="text">{tecnologia}</small>
        <p className="text-sm text-neutral-400 mt-1">
          {description}
        </p>
      </div>
    </Wrapper>
  );
}
