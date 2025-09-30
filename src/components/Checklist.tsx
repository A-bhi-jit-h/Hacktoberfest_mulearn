import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const checklistItems = [
  "Register before contributing",
  "Follow contribution rules",
  "Make meaningful contributions",
  "Stay respectful & collaborative",
];

const Checklist = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Checklist</h2>

        <Card className="border-border">
          <CardContent className="p-8">
            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Checklist;
