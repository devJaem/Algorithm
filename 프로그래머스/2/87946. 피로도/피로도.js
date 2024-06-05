function solution(k, dungeons) {
  let answer = -1;
  const visited = new Array(dungeons.length).fill(0);

  const dfs = (k, dungeons, count, visited) => {
    for (let i = 0; i < dungeons.length; i++) {
      const [total, use] = dungeons[i];
      if (visited[i] || total > k) continue;

      visited[i] = 1;
      dfs(k - use, dungeons, count + 1, visited);
      visited[i] = 0;
    }

    answer = Math.max(count, answer);
  };

  dfs(k, dungeons, 0, visited);
  return answer;
}
