import { createFileRoute, notFound } from "@tanstack/react-router";

import { Display, Eyebrow, PillLink, Shell } from "@/components/ui-kit";
import { getStory } from "@/lib/journal";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Story not found — Maison Bain" }, { name: "robots", content: "noindex" }] };
    }
    const { story } = loaderData;
    return {
      meta: [
        { title: `${story.title} — Maison Bain Journal` },
        { name: "description", content: story.standfirst },
        { property: "og:title", content: story.title },
        { property: "og:description", content: story.standfirst },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/journal/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/journal/${params.slug}` }],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();

  return (
    <article className="bg-snow pb-32 pt-40">
      <Shell className="max-w-[800px]">
        <Eyebrow>Journal</Eyebrow>
        <Display as="h1" className="mt-6 text-slate">
          {story.title}
        </Display>
        <p className="mt-8 font-display text-xl leading-snug text-stone">{story.standfirst}</p>
      </Shell>

      <img
        src={story.image}
        alt={story.alt}
        loading="lazy"
        className="mt-16 h-[60vh] w-full object-cover"
      />

      <Shell className="mt-16 max-w-[720px]">
        <div className="space-y-7 text-base leading-relaxed text-slate">
          {story.body.map((p: string) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mt-16 border-t border-slate/15 pt-10">
          <PillLink to="/journal">All stories</PillLink>
        </div>
      </Shell>
    </article>
  );
}