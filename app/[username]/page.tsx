import { Octokit } from "@octokit/rest";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});

async function fetchUserStars(username: string) {
  try {

    const { data: starredRepos } = await octokit.rest.activity.listReposStarredByUser({
      username,
      per_page: 100,
    });
    return starredRepos;
  } catch (error) {
    console.error("Error fetching user stars:", error);
    return null;
  }
}

export default async function UserPage({ params }: { params: { username: string } }) {
  const starredRepos = await fetchUserStars(params.username);

  if (!starredRepos) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Starred Repositories for {params.username}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {starredRepos.map((repo: any) => (
          <Card key={repo.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-medium">{repo.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{repo.description}</p>
              <div className="mt-2 flex items-center space-x-2 text-sm text-muted-foreground">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span>{repo.language}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}