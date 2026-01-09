import React from "react";

/**
 * Props:
 * - matches: Array<Match>
 * - news: Array<News>
 * - loading?: boolean
 */
const LandingPage = ({ matches = [], news = [], loading = false }) => {
  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="bg-neutral-950 text-white pb-16">
      
      {/* Matches Section */}
      <section className="px-6 pt-6">
        <h2 className="text-lg font-semibold mb-4">
          Live & Upcoming Matches
        </h2>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {matches.length === 0 ? (
            <EmptyState text="No matches available" />
          ) : (
            matches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))
          )}
        </div>
      </section>

      {/* News Section */}
      <section className="px-6 mt-12">
        <h2 className="text-lg font-semibold mb-4">
          Latest Cricket News
        </h2>

        <div className="space-y-4">
          {news.length === 0 ? (
            <EmptyState text="No news available" />
          ) : (
            news.map(item => (
              <NewsCard key={item.id} item={item} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

/* ------------------ Components ------------------ */

const MatchCard = ({ match }) => {
  return (
    <div className="min-w-[260px] bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-emerald-600 transition">
      <p className="text-sm text-neutral-400 mb-1">
        {match.format} • {match.status}
      </p>

      <div className="space-y-2">
        <Row name={match.teamA.name} value={match.teamA.score} />
        <Row name={match.teamB.name} value={match.teamB.score} />
      </div>

      <p className="text-xs text-emerald-500 mt-3">
        {match.startTime}
      </p>
    </div>
  );
};

const NewsCard = ({ item }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-emerald-600 transition">
      <h3 className="font-medium mb-1">
        {item.title}
      </h3>
      <p className="text-sm text-neutral-400">
        {item.summary}
      </p>
    </div>
  );
};

const Row = ({ name, value }) => (
  <div className="flex justify-between">
    <span>{name}</span>
    <span className="text-neutral-300">{value}</span>
  </div>
);

const EmptyState = ({ text }) => (
  <div className="text-neutral-500 text-sm">
    {text}
  </div>
);

const LoadingSkeleton = () => (
  <div className="px-6 pt-6 space-y-6 animate-pulse">
    <div className="h-5 bg-neutral-800 rounded w-48"></div>
    <div className="flex gap-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="min-w-[260px] h-32 bg-neutral-900 rounded"
        />
      ))}
    </div>
  </div>
);

export default LandingPage;
