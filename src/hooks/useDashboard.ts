import Dashboard from "@/lib/data/dashboard";

export default function useDashboard() {
  const experiances = Dashboard.experiance();
  const techStacks = Dashboard.techStack();
  const nowLearning = Dashboard.nowLearning();
  const project = Dashboard.projects();

  const currentLearning =
    nowLearning[0] && nowLearning[0].progress !== 100 ? nowLearning[0] : null;

  return {
    summary: {
      experiances,
      techStacks,
      nowLearning,
      project,
    },
    activity: {
      learning: currentLearning,
    },
  };
}
