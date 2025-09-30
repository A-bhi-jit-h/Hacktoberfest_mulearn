import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, GitBranch, Users, Award } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Step 1: Register at Hacktoberfest",
    description: "Sign up with GitHub or GitLab",
    link: "https://hacktoberfest.com/",
    linkText: "Visit hacktoberfest.com",
  },
  {
    icon: GitBranch,
    title: "Step 2: Choose a Repository",
    description: "Review the contribution guide for karma, rules, and PR guidelines",
  },
  {
    icon: Users,
    title: "Step 3: Start Contributing",
    description: (
      <>
        Submit PRs/MRs between Oct 1 – Oct 31, 2025
        <br />
        <span className="text-sm mt-2 block text-muted-foreground">
          • Only meaningful contributions count
          <br />
          • Spammy PRs will be disqualified
          <br />
          • Goal: 6 accepted PRs/MRs
          <br />
          • 💡 Rule: 1 PR must be merged before making another to the same repo
        </span>
      </>
    ),
  },
  {
    icon: Award,
    title: "Step 4: Earn Your Badge",
    description: (
      <>
        Track progress on Holopin
        <br />
        <span className="text-sm mt-2 block text-muted-foreground">
          • Unlock badge after 6 accepted PRs
          <br />• Share it on socials (tag µLearn!)
        </span>
      </>
    ),
  },
];

const QuickStart = () => {
  return (
    <section id="quickstart" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Quick Start Guide</h2>
        <p className="text-center text-muted-foreground mb-12">Follow these simple steps to get started</p>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              {step.link && (
                <CardContent>
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    {step.linkText} →
                  </a>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
