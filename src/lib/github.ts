import { profile, type GitHubRepo } from "@/data/profile";

const GITHUB_API = "https://api.github.com";

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    // Fetch user's public repos sorted by stars
    const response = await fetch(
      `${GITHUB_API}/users/${profile.githubUsername}/repos?sort=stars&per_page=6&type=public`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add token for higher rate limits (optional)
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 60 }, // Cache for 1 minute (was 1 hour)
      }
    );

    if (!response.ok) {
      console.error("GitHub API error:", response.status);
      return profile.pinnedRepos; // Fallback to static data
    }

    const repos = await response.json();

    return repos.map((repo: {
      name: string;
      description: string | null;
      html_url: string;
      language: string | null;
      stargazers_count: number;
    }) => ({
      name: repo.name,
      description: repo.description || "No description",
      url: repo.html_url,
      language: repo.language || undefined,
      stars: repo.stargazers_count,
    }));
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return profile.pinnedRepos; // Fallback to static data
  }
}
