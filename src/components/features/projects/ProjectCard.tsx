// @ts-nocheck
import { ExternalLink } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, repoUrl, image } = project;

  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        {image ? 
          <img
            src={image}
            alt={title}
            className="mb-4 h-40 w-full rounded-2xl object-cover"
          />
         : (
          <div className="mb-4 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-700 to-ink-950 text-mint-100/60">
            {title}
          </div>
        )}
        <h3 className="text-xl font-semibold text-ink-950">{title}</h3>
        <p className="mt-2 text-sm text-ink-700">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 hover:text-ink-700">
          <ExternalLink size={15} /> Live
        </a>
        <a href={repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 hover:text-ink-700">
          <FaGithub size={15} /> Code
        </a>
      </div>
    </Card>
  );
}