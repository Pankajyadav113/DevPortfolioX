import { useEffect, useState } from "react";
import FadeIn from "../ui/FadeIn";
import { FaGithub, FaUsers, FaBook, FaUserFriends } from "react-icons/fa";
import { github } from "../../constants/github";

interface GitHubUser {
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${github.username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              GitHub Activity
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
              Live GitHub profile information fetched directly from GitHub API.
            </p>
          </div>
        </FadeIn>

        {loading ? (
          <div className="text-center text-cyan-400 text-xl">
            Loading GitHub Profile...
          </div>
        ) : (
          user && (
            <FadeIn delay={0.2}>
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-10 shadow-lg">

                <div className="flex flex-col items-center gap-8 md:flex-row">

                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="h-44 w-44 rounded-full border-4 border-cyan-400"
                  />

                  <div className="flex-1">

                    <h3 className="text-4xl font-bold text-white">
                      {user.name}
                    </h3>

                    <p className="mt-3 text-lg text-slate-400">
                      {user.bio}
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-3">

                      <div className="rounded-xl bg-slate-900 p-6 text-center">
                        <FaBook className="mx-auto mb-3 text-3xl text-cyan-400" />
                        <p className="text-3xl font-bold text-white">
                          {user.public_repos}
                        </p>
                        <p className="mt-2 text-slate-400">
                          Repositories
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-900 p-6 text-center">
                        <FaUsers className="mx-auto mb-3 text-3xl text-cyan-400" />
                        <p className="text-3xl font-bold text-white">
                          {user.followers}
                        </p>
                        <p className="mt-2 text-slate-400">
                          Followers
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-900 p-6 text-center">
                        <FaUserFriends className="mx-auto mb-3 text-3xl text-cyan-400" />
                        <p className="text-3xl font-bold text-white">
                          {user.following}
                        </p>
                        <p className="mt-2 text-slate-400">
                          Following
                        </p>
                      </div>

                    </div>

                    <div className="mt-10">
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
                      >
                        <FaGithub />
                        Visit GitHub Profile
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            </FadeIn>
          )
        )}
      </div>
    </section>
  );
}

export default GitHubSection;